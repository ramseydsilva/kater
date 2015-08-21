define([
    "jquery",
    "./collections/category",
    "./collections/skill",
    "./collections/city",
    "./models/user",
    "router",
    "browser",
    "template",
    "css!font-awesome-css"
], function($, CategoryCollection, SkillCollection, CityCollection, UserModel, AppRouter) {
    
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

        window.app = {
            views: {},
            user: new UserModel(),
            promises: {
                'mapLoaded': $.Deferred()
            },
            events: {},
            collections: {
                category: new CategoryCollection(),
                skill: new SkillCollection(),
                city: new CityCollection()
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
        };
    
        app.promises.skillLoaded = $.Deferred();
        app.promises.categoryLoaded = window.app.collections.category.fetch({
            success: function() {
                app.promises.skillLoaded = window.app.collections.skill.fetch();
            }
        });
        app.promises.cityLoaded = window.app.collections.city.fetch();
        
        app.user.fetch({
            url: '/api/users/current/',
            success: function(model) {
                require(["views/user"], function(UserView) {
                    app.views.user = new UserView({
                        el: document.getElementById("user")
                    });
                });
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

        app.router = new AppRouter();
        Backbone.history.start({pushState: true});

    });

});