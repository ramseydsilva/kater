define(function() {
    return require.config({
        version: "1.0.0",
        waitSeconds: 30,
        paths: {
            "jquery": "../lib/jquery-2.1.0.min",
            "jqueryUI": "../lib/jquery-ui-1.11.4.datepicker/jquery-ui.min",
            "jqueryUICSS": "../lib/jquery-ui-1.11.4.datepicker/jquery-ui.min",
            "ng_all": "../lib/nogray-1.2.2/ng_all",
            "timepicker": "../lib/nogray-1.2.2/components/timepicker",
            "template": "../lib/template",
            "handlebars": "../lib/handelbars",
            "underscore": "../lib/underscore",
            "backbone": "../lib/backbone",
            "bootstrap": "../lib/bootstrap",
            "typeahead": "../lib/bootstrap3-typeahead.min",
            "modernizr": "../lib/modernizr",
            "countTo": "../lib/jquery.countTo",
            "browser": "../lib/jquery.browser",
            "smoothScroll": "../lib/SmoothScroll",
            "waypoints": "../lib/jquery.waypoints.min",
            "async": "../lib/async",
            "purl": "../lib/purl",
            "text": "../lib/text",
            
            "require-css": "../lib/requirejs/plugins/require-css/css",
            "normalize": "../lib/requirejs/plugins/require-css/normalize",
            "css-builder": "../lib/requirejs/plugins/require-css/css-builder",
            "essentials": "../lib/essentials",
            "googlemaps": "https://maps.googleapis.com/maps/api/js?libraries=places&v=3.exp&amp;sensor=false&amp;signed_in=true",
            "core": "./core",
            "moment": "../lib/moment",
            "moment-timezone": "../lib/moment-timezone",
            "bootstrap-css": "../lib/bootstrap/css/bootstrap",
            "font-awesome-css": "../lib/fonts/font-awesome/css/font-awesome",
            "fontello-css": "../lib/fonts/fontello/css/fontello",
            "style-css": "../lib/css/style",
            "custom-css": "../lib/css/custom",

            "rentsomefolks": "./controller",

        },
        map: {
            "*": { "css": "require-css" }
        },
        shim: {
            "backbone": {
                exports: "Backbone",
                deps: ["underscore", "jquery"]
            },
            "bootstrap": {
                deps: ["jquery"]
            },
            "jquery": {
                exports: "jQuery"
            },
            "underscore": {
                exports: "_"
            },
            "typeahead": ["jquery"],
            "jqueryUI": ["jquery", "css!jqueryUICSS"],
            "timepicker": ["ng_all"],
            "purl": ["jquery"],
            "modernizr": ["jquery"],
            "countTo": ["jquery"],
            "browser": ["jquery"],
            "smoothScroll": ["jquery"],
            "template": ["jquery", "bootstrap", "modernizr", "browser", "smoothScroll"]
        }
    });
});
