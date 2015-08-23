define([
    "backbone"
], function(Backbone) {
    "use strict";
    
    return Backbone.Model.extend({

        initialize: function() {

        },

        logout: function() {
            this.fetch({
                url: "/api/logout/"
            });
        }

    });

});
