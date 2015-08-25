define([
    "core/collection",
    "../models/category"
], function (Collection, CategoryModel) {
    "use strict";
    
    return Collection.extend({

        model: CategoryModel,
        url: '/api/categories'
        
    });

});
