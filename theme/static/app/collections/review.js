define([
    "core/collection",
    "../models/review"
], function (Collection, ReviewModel) {
    "use strict";
    
    return Collection.extend({

        model: ReviewModel,

        initialize: function(models, options) {
            this.caterer = options.caterer;
        },

        url: function() {
            return this.caterer.url() + "/reviews/";
        }

    });

});
