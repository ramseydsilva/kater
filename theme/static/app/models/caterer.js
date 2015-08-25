define([
    "backbone",
    "../collections/item-category",
    "../collections/review"
], function(Backbone, ItemCategoryCollection, ReviewCollection) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function() {
            this.menu = new ItemCategoryCollection([], {
                caterer: this
            });
            this.reviews = new ReviewCollection([], {
                caterer: this
            });
            this.menu.fetch();
            this.reviews.fetch();
        }

    });

});
