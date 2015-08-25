define([
    "core/collection",
    "../models/caterer"
], function (Collection, CatererModel) {
    "use strict";
    
    return Collection.extend({
        model: CatererModel,
        url: '/api/caterers'
    });

});
