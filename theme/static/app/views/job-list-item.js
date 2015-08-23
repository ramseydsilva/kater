define([
    "core/view",
    "underscore",
    "text!templates/job-list-item.html",
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
            var view = this;
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
