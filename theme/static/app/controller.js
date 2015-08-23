define([
    "jquery",
    "core/app",
    "./collections/category",
    "./collections/skill",
    "./collections/city",
    "./collections/job",
    "./models/user",
    "browser",
    "template",
    "css!font-awesome-css"
], function($, App, CategoryCollection, SkillCollection, CityCollection, JobCollection, UserModel) {
    
    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $(document).ready(function() {
        
        if (navigator.geolocation) {
            var options = {enableHighAccuracy: false, maximumAge: 15000, timeout: 10000};
            //navigator.geolocation.getCurrentPosition(setLocation, function(){}, options);
        }

        var $h1_title = $("h1.title");
        var $h1_page_title = $("#pageTitle");
        var $posFixed = $('.posFixed');
        var $title = $("title");
        Event = function() {
            this.listeners = [];
            return this;
        };

        window.app = new App({
            
            $el: document.getElementById("app-container"),
            user: new UserModel(),

            promises: {
                'mapLoaded': $.Deferred()
            },
                
            components: {
                "home": {
                    view: "views/home",
                    route: "",
                    el: document.getElementById("home"),
                    depends: ["map", "location", "user-menu"]
                },
                "location": {
                    view: "views/location",
                    el: document.getElementById("location")
                },
                "map": {
                    view: "views/map",
                    el: document.getElementById("map")
                },
                "login": {
                    view: "views/login",
                    route: "login/",
                    el: document.getElementById("login"),
                    depends: ["user-menu"]
                },
                "logout": {
                    view: "views/logout",
                    route: "logout/",
                    depends: ["user-menu"]
                },
                "profile": {
                    view: "views/profile",
                    route: "profile/",
                    el: document.getElementById("profile"),
                    depends: ["user-menu"]
                },
                "join": {
                    view: "views/join",
                    route: "join/",
                    el: document.getElementById("join"),
                    depends: ["user-menu"]
                },
                "folks": {
                    view: "views/folks",
                    route: "folks/",
                    el: document.getElementById("folks"),
                    depends: ["user-menu"]
                },
                "jobs": {
                    view: "views/job",
                    route: "jobs/",
                    el: document.getElementById("jobs"),
                    depends: ["user-menu"]
                },
                "job": {
                    view: "views/job",
                    route: "jobs/:id/",
                    el: document.getElementById("job"),
                    depends: ["map", "user-menu"]
                },
                "jobPost": {
                    view: "views/jobPost",
                    route: "jobs/new/",
                    el: document.getElementById("jobPost"),
                    depends: ["map", "location", "user-menu"],
                },
                "jobReview": {
                    view: "views/jobReview",
                    route: "jobs/new/review/",
                    el: document.getElementById("jobReview"),
                    depends: ["jobPost", "user-menu"]
                },
                "user-menu": {
                    view: "views/user-menu",
                    el: document.getElementById("user-menu")
                }
            },

            events: {},
            collections: {
                category: new CategoryCollection(),
                skill: new SkillCollection(),
                city: new CityCollection(),
                job: new JobCollection()
            },
            changeTitle: function(title) {
                return this.changePageTitle(title);
                $h1_title.text(title);
                $title.text(title + " - Rent some folks");
            },
            changePageTitle: function(title) {
                if (title) {
                    $h1_page_title.html('<h1>'+title+'</h1>');
                } else {
                    if (title===null) return;
                    $h1_page_title.html('');
                }
            }
        });
    
        Backbone.history.start({pushState: true});

        app.promises.skillLoaded = window.app.collections.skill.fetch();
        app.promises.categoryLoaded = window.app.collections.category.fetch();
        app.promises.cityLoaded = window.app.collections.city.fetch();
        app.promises.jobLoaded = app.collections.job.fetch();

        app.user.fetch({
            url: '/api/users/current/',
            success: function(model) {

            }
        });
        
        function getATag(target) {
            if (target.tagName != "A") {
                return getATag(target.parentElement);
            }
            return target;
        };

        $("body").on("click", 'a.live', function(e) {
            e.preventDefault();
            e.target = getATag(e.target);
            app.router.navigate(e.target.getAttribute("href").substr(1), true);
        });

        $("body").on("click", 'a.back', function(e) {
            e.preventDefault();
            window.history.back();
        });

        $(window).scroll(function() {
            if (window.scrollY > 20) {
                $posFixed.css("top", 65);
            } else {
                $posFixed.css("top", "auto");
            }
        });

    });

});