define([
    "core/router"
], function (MyRouter) {
    var title = {
        "home": "Home",
        "jobs": "Jobs",
        "jobPost": "Post a new Job",
        "jobReview": "Review Job",
        "folks": "Folks",
        "login": "Login",
        "join": "Join",
        "logout": null,
        "profile": "My Profile"
    };

    var selectSingleCategory = hideBack = hideMap = showHomeButtons = false;
    var setHide = function() {
        selectSingleCategory = hideMap = hideBack = showHomeButtons = false;
    }

    var initialLoad = true;
    var $jobContainer = $("#job");
    var $mainBack = $("#main-back");
    var $mapContainer = $("#map");
    var $body = $("body");

    var postProcessing = function() {
        if (showHomeButtons) {
            app.views["home"].showHomeButtons();
        } else {
            app.views["home"].hideHomeButtons();
        }
        if (hideMap) {
            app.promises.mapLoaded.done(function() {
                $mapContainer.addClass("hideMap")
            });
        } else {
            $mapContainer.removeClass("hideMap");
        }

        if (hideBack) {
            $mainBack.hide();
        } else {
            $mainBack.show();
        }
    }

    return MyRouter.extend({

        routes: {
            "": "home",
            "login/": "login",
            "profile/": "profile",
            "logout/": "logout",
            "join/": "join",
            "jobs/": "jobs",
            "jobs/new/": "jobPost",
            "jobs/new/review/": "jobReview",
            "jobs/:id/": "job",
            "folks/": "folks"
        },

        pageNotFoundView: function(title) {
            app.changeTitle(title || "404 Page Not Found");
        },

        homeCallback: function(callback) {
            hideBack = true;
            showHomeButtons = true;
            postProcessing();
            app.views["home"].selectSingleCategory = selectSingleCategory;
        },

        jobReviewCallback: function(callback) {
            hideFilters = true;
            postProcessing();
            if (callback) callback();
        },

        loginCallback: function(callback) {
            hideMap = true;
            postProcessing();
            if (callback) callback();
        },

        profileCallback: function(callback) {
            hideMap = true;
            postProcessing();
            if (callback) callback();
        },

        joinCallback: function(callback) {
            hideMap = true;
            postProcessing();
            if (callback) callback();
        },

        folksCallback: function(callback) {
            hideMap = true;
            postProcessing();
            if (callback) callback();
        },

        jobsCallback: function(callback) {
            hideMap = true;
            postProcessing();
            if (callback) callback();
        },

        jobCallback: function(job, callback) {
            app.changeTitle("Job");
            app.changePageTitle(job.attributes.title);
            app.promises.mapLoaded.done(function() {
                setMap({lat: job.attributes.latitude, lng: job.attributes.longitude});
            });
            postProcessing();
        },

        jobPostCallback: function(callback) {
            app.views["home"].$el.show();
            selectSingleCategory = true;
            postProcessing();
            if (app.views["home"]) {
                var selectedCategories = app.collections["category"].where({selected: true});
                if (selectedCategories.length > 1) {
                    selectCategory = selectedCategories[0];
                    app.views["home"].unselectAllCategories(selectCategory);
                }
            }
            if (callback) callback();
        },

        job: function(id, job, callback) {
            var that = this;
            if (!job) job = app.collections["job"].findWhere({id: parseInt(id)});
            if (job) {
                if (!job.view) {
                    require(["views/job"], function(JobView) {
                        job.view = new JobView({
                            el: document.getElementById("job"),
                            model: job
                        });
                        that.afterViewInit.call(that, "job", job);
                    });
                } else {
                    $jobContainer.html(job.view.html);
                    that.afterViewInit.call(that, "job", job);
                }
            } else {
                var that = this;
                job = app.collections["job"].add({id: id});
                job.fetch({
                    error: function(model, response, options) {
                        app.collections["job"].remove(model);
                        this.pageNotFoundView(response.status + " " + response.statusText);
                    },
                    success: function(model) {
                        that.job(id, model);
                    }
                });
            }
        },

        logout: function() {
            app.user.fetch({
                url: "/api/logout/"
            });
        },

        execute: function(callback, args, name) {
            var router = this;
            app.changeTitle(title[name]);
            if (!callback) callback = router[name];
            window.scrollTo(0,0);
            $body.show();

            if (name == "jobReview" && !app.views["jobPost"]) {
                return this.navigate("/jobs/new/", true);
            }
            
            if (!app.views["map"]) {
                require(["views/map"], function(MapView) {
                    app.views["map"] = new MapView({
                        el: document.getElementById("map")
                    });
                    if (name != "home" && !app.views["home"]) {
                        // load home view first
                        router.home(null, null, function() {
                            setHide();
                            if (callback) callback.apply(router, args);
                        });
                    } else {
                        setHide();
                        if (callback) callback.apply(router, args);
                    }
                });
            } else {
                setHide();
                if (callback) callback.apply(router, args);
            }
        }

    });
});