define([
    "core/view",
    "underscore",
    "text!templates/profile.html",
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            
        },

        initialize: function() {
            this.model = app.user;
            this.render();
        },

        render: function() {
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
        }

    });

});
