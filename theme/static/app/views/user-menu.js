define([
    "core/view",
    "underscore",
    "text!templates/user-menu.html",
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            
        },

        initialize: function() {
            this.model = app.user;
            this.model.on("change:username", this.render, this);
            this.render();
        },

        render: function() {
            this.html = this.template({
                username: this.model.attributes.username
            });
            this.$el.html(this.html);
        }

    });

});
