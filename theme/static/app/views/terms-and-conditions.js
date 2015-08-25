define([
    "core/view",
    "underscore",
    "text!templates/terms-and-conditions.html"
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

            }));
            this.$el.html(this.html);           
        }

    });

});
