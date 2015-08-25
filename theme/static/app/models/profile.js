define([
    "core/authSync"
], function(authSync) {
    "use strict";
    
    return authSync.Model.extend({

        idAttribute: "username",
        url: "/api/profile/",

        isNew: function() {
            return false
        },
        
        initialize: function() {

        }

    });

});
