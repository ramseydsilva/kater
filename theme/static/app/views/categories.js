define([
    "backbone",
    "underscore",
    "text!templates/categories.html"
], function(Backbone, _, template) {

    return Backbone.View.extend({

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
