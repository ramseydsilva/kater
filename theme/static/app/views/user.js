define([
    "backbone",
    "underscore",
    "text!templates/user-menu.html",
    "text!templates/user.html",
], function(Backbone, _, menuTemplate, template) {


    var $greeting = $("#greeting");
    var $userMenu = $("#user-menu");

    return Backbone.View.extend({

        template: _.template(template),

        events: {
            
        },

        initialize: function() {
            this.model = app.user;
            app.user.on("change:username", this.renderMenu, this);
            this.renderMenu();
        },

        renderMenu: function() {
            $userMenu.html(_.template(menuTemplate)({
                username: this.model.attributes.username
            }));
        }

    });

});
