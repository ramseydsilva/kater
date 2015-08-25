define([
    "core/collection",
    "../models/item-category"
], function (Collection, ItemCategoryModel) {
    "use strict";
    
    return Collection.extend({

        idAttribute: "id",
        
        model: ItemCategoryModel,

        initialize: function(models, options) {
            this.caterer = options.caterer
        },
        
        url: function() {
            return this.caterer.url() + "/menu"
        }

    });

});
