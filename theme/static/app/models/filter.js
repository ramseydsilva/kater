define([
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        defaults: {
            all_female_servers: false,
            arabic_speaking_only: false
        },

        initialize: function() {
        }

    });

});
