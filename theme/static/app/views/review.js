define([
    "core/view",
    "underscore",
    "text!templates/review.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
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
