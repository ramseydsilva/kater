define([
    "core/view",
    "underscore",
    "text!templates/caterer-list-item.html"
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
                name: this.model.attributes.name,
                image: this.model.attributes.image,
                slug: this.model.attributes.slug
            }));
            this.$el.html(this.html);
        }

    });

});
