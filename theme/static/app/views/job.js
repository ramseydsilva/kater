define([
    "core/view",
    "underscore",
    "text!templates/job.html",
], function(View, _, template) {

    return View({

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
