define([
    "backbone",
    "../models/category"
], function (Backbone, CategoryModel) {
    "use strict";
    return Backbone.Collection.extend({
        model: CategoryModel,
        url: '/api/categories'
    });

});
