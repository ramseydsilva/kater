define([
    "core/view",
    "underscore",
    "text!templates/main-cart-item.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),
        tagName: 'tr',

        events: {
            "click .quantity_arrow_decr": "decrQuantity",
            "click .quantity_arrow_incr": "incrQuantity",
            "change .input-number": "setQuantity",
            'click .remove': 'removeItem'
        },

        initialize: function() {
            this.render();
            this.model.on("change:quantity", this.changeQuantity, this);
            this.model.on("remove", this.remove, this);
        },

        decrQuantity: function() {
            var val = parseInt(this.quantityInput.val());
            if (val > 1) this.quantityInput.val(val - 1).trigger("change");
        },

        incrQuantity: function(e) {
            e.preventDefault();
            this.quantityInput.val(parseInt(this.quantityInput.val()) + 1).trigger("change");
        },

        setQuantity: function() {
            var quantity = parseInt(this.quantityInput.val());
            if (quantity > 0) this.model.set("quantity", quantity);
        },
        
        removeItem: function(e) {
            e.preventDefault();
            this.model.collection.remove(this.model);
        },

        changeQuantity: function(model) {
            var total = this.model.item.attributes.price * this.model.attributes.quantity;
            this.quantityInput.val(this.model.attributes.quantity);
            this.sub_total.text(total);
        },

        render: function() {
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.quantityInput = this.$(".input-number");
            this.sub_total = this.$(".sub_total");
        }

    });

});
