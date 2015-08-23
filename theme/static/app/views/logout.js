define([
    "core/view",
    "underscore"
], function(View, _) {

    return View.extend({
        
        events: {
            "route": "onRoute"
        },

        initialize: function() {
            this.onRoute();
        },

        onRoute: function() {
            app.user.logout();
            app.router.navigate("/", {trigger: true});
        }

    });

});


