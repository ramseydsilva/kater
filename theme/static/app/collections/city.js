define([
    "backbone",
    "../models/city"
], function (Backbone, CityModel) {
    "use strict";
    return Backbone.Collection.extend({
        model: CityModel,
        url: '/api/cities'
    });

});
