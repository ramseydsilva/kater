define([
    "core/authSync"
], function(authSync) {
    "use strict";
    
    return authSync.Model.extend({

        idAttribute: "username",
        url: "/api/billing/",

        isNew: function() {
            return false
        },
        
        initialize: function() {

        }

    });

});
