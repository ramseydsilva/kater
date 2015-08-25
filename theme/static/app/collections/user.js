define([
    "core/collection",
    "../models/user"
], function (Collection, UserModel) {
    "use strict";
    
    return Collection.extend({
        model: UserModel,
        url: '/api/users/'
    });

});
