define([
    "core/view",
    "underscore",
    "text!templates/checkout-item.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),
        tagName: 'tr',

        events: {
        },

        initialize: function() {
            this.render();
            this.model.on("change:quantity", this.changeQuantity, this);
            this.model.on("remove", this.remove, this);
        },

        changeQuantity: function(model) {
            this.quantity.text(this.model.attributes.quantity);
            this.sub_total.text(this.model.getSubTotal());
        },

        render: function() {
            this.html = $(this.template({
                model: this.model
            }));
            this.sub_total = this.$(".sub_total");
            this.quantity = this.$(".quantity");
            this.$el.html(this.html);
        }

    });

});
