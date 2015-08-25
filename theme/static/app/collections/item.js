define([
    "core/collection",
    "../models/item"
], function (Collection, ItemModel) {
    "use strict";
    
    return Collection.extend({

        model: ItemModel,

        initialize: function(model, options) {
            this.caterer = options.caterer
        }

    });

});
