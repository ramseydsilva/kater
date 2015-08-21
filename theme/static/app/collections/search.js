define([
    "backbone",
    "../models/search"
], function (Backbone, SearchModel) {
    "use strict";
    return Backbone.Collection.extend({
        model: SearchModel
    });

});