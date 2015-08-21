define([
    "backbone",
    "underscore",
    "text!templates/job-list-item.html",
], function(Backbone, _, template) {

    return Backbone.View.extend({

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
