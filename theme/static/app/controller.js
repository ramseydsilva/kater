define([
    "jquery",
    "core/app",
    "./collections/area",
    "./collections/caterer",
    "./collections/category",
    "./models/user",
    "./models/filter",
    "./models/cart",
    "browser",
    "template",
    "css!font-awesome-css"
], function($, App, AreaCollection, CatererCollection, CategoryCollection, UserModel, FilterModel, CartModel) {
    
    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $(document).ready(function() {

      $(function () {
        $('#myTab a:first').tab('show');

        //$('.nstSlider').nstSlider({
        //        "left_grip_selector": ".leftGrip",
        //        "right_grip_selector": ".rightGrip",
        //        "value_bar_selector": ".bar",
        //        "value_changed_callback": function(cause, leftValue, rightValue) {
        //            $(this).parent().find('.leftLabel').val(leftValue);
        //            $(this).parent().find('.rightLabel').val(rightValue);
        //        }
        //    });


          });	

            var $document = $(document),
            $element = $('#header'),
            elementsidebar = 'headerfixed' 

            $(window).scroll(function() {
              $element.toggleClass(elementsidebar, $document.scrollTop() >= 50); 
            });

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
            
            user: new UserModel(),
            
            promises: {},
            
            events: {},

            collections: {
                'area': new AreaCollection(),
                'caterer': new CatererCollection(),
                'category': new CategoryCollection()
            },

            components: {
                "cart": {
                    view: "views/cart",
                    el: document.getElementById("cart")
                },
                "find-caterers": {
                    view: "views/find-caterers",
                    el: document.getElementById("find-caterers")
                },
                "banner": {
                    view: "views/banner",
                    el: document.getElementById("banner")
                },
                "brand-carousel": {
                    view: "views/brand-carousel",
                    el: document.getElementById("brand-carousel")
                },
                "full-banner": {
                    view: "views/full-banner",
                    el: document.getElementById("full-banner")
                },
                "user-nav": {
                    view: "views/user-nav",
                    el: document.getElementById("user-nav")
                },
                "logout": {
                    view: "views/logout",
                    route: "logout(/)",
                    depends: ["user-nav"]
                },
                "home": {
                    view: "views/home",
                    route: "",
                    el: document.getElementById("home"),
                    depends: ["user-nav", "brand-carousel"]
                },
                "about-us": {
                    view: "views/about-us",
                    route: "about-us(/)",
                    el: document.getElementById("about-us"),
                    depends: ["user-nav", "full-banner"]
                },
                "privacy-policy": {
                    view: "views/privacy-policy",
                    route: "privacy-policy(/)",
                    el: document.getElementById("privacy-policy"),
                    depends: ["user-nav", "full-banner"]
                },
                "terms-and-conditions": {
                    view: "views/terms-and-conditions",
                    route: "terms-and-conditions(/)",
                    el: document.getElementById("terms-and-conditions"),
                    depends: ["user-nav", "full-banner"]
                },
                "contact-us": {
                    view: "views/contact-us",
                    route: "get-in-touch(/)",
                    el: document.getElementById("contact-us"),
                    depends: ["user-nav", "full-banner"]
                },
                "place-order": {
                    view: "views/place-order",
                    route: "place-order(/)",
                    el: document.getElementById("place-order"),
                    depends: ["user-nav", "banner", "cart"]
                },
                "caterers": {
                    view: "views/caterers",
                    route: "caterers(/)",
                    el: document.getElementById("caterers"),
                    depends: ["user-nav", "banner", "find-caterers"]
                },
                "caterer": {
                    view: "views/caterer",
                    route: "caterers/:slug(/)",
                    el: document.getElementById("caterer"),
                    depends: ["user-nav", "banner", "cart"]
                },
                "my-cart": {
                    view: "views/my-cart",
                    route: "my-cart(/)",
                    el: document.getElementById("my-cart"),
                    depends: ["user-nav", "banner", "cart"]
                },
                "checkout": {
                    view: "views/checkout",
                    route: "checkout(/)",
                    el: document.getElementById("checkout"),
                    depends: ["user-nav", "banner", "cart"]
                },
                "profile": {
                    view: "views/profile",
                    route: "profile(/)",
                    el: document.getElementById("profile-page"),
                    depends: ["user-nav", "banner", "cart"]
                }
            }

        });
    
        app.filter = new FilterModel();
        app.cart = new CartModel();
        app.collections.area.fetch();
        app.collections.category.fetch();
        
        Backbone.history.start({pushState: true});

        app.user.fetch();        

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
		
		var $document = $(document),
			$element = $('.mainContentTop .customTabs'),
			$elements = $('.contentbdox'),
			className = 'hoveradds';
			classNames = 'extraspace';
		
        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 300);
            $elements.toggleClass(classNames, $document.scrollTop() >= 300);
        });

    });

});