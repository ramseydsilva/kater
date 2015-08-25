define([
    "backbone",
    "../collections/item"
], function(Backbone, ItemCollection) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function(attrs, options) {
            this.items = new ItemCollection(attrs.items, {caterer: this.collection.caterer});
        }

    });

});
