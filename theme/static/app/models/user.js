define([
    "core/authSync",
    "./profile",
    "./billing"
], function(authSync, ProfileModel, BillingModel) {
    "use strict";
    
    return authSync.Model.extend({

        idAttribute: "username",

        url: '/api/user/',

        initialize: function() {
            this.on("change:username", this.getProfile, this);
            this.profile = new ProfileModel({
                user: this
            });
            this.billing = new BillingModel({
                user: this
            });
        },

        getProfile: function() {
            this.profile.fetch();
            this.billing.fetch();
        },

        logout: function() {
            this.fetch({
                url: "/api/logout/"
            });
        }

    });

});
