define([
    "core/collection",
    "../models/area"
], function (Collection, AreaModel) {
    "use strict";
    
    return Collection.extend({
        model: AreaModel,
        url: '/api/areas'
    });

});
