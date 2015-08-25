define([
    "core/view",
    "underscore",
    "text!templates/item.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),
        tagName: "tr",

        events: {
            "click .quantity_arrow_decr": "decrQuantity",
            "click .quantity_arrow_incr": "incrQuantity",
            "change .input-number": "setQuantity",
            "click .add": "incrQuantity",
            "click .remove": "resetQuantity"
        },

        initialize: function() {
            this.render();
            app.cart.items.on("reset", this.resetQuantity, this);
        },

        decrQuantity: function() {
            var val = parseInt(this.quantityInput.val());
            if (val > 0) this.quantityInput.val(val - 1).trigger("change");
        },

        incrQuantity: function(e) {
            e.preventDefault();
            this.quantityInput.val(parseInt(this.quantityInput.val()) + 1).trigger("change");
        },

        setQuantity: function() {
            var quantity = parseInt(this.quantityInput.val());
            if (quantity > 0) {
                this.removeBtn.removeClass("hidden");
                var item = app.cart.items.findWhere({item: this.model.id});
                if (!item) {
                    app.cart.items.add({
                        item: this.model.id,
                        quantity: quantity,
                        item_model: this.model
                    }, {item: this.model});
                } else {
                    item.set("quantity", quantity);
                }
            } else {
                this.removeBtn.addClass("hidden");
                var item = app.cart.items.findWhere({item: this.model.id});
                if (item) {
                    app.cart.items.remove(item);
                }
            }
        },

        resetQuantity: function(e) {
            if (e && e.preventDefault) e.preventDefault();
            this.quantityInput.val(0).trigger("change");
        },

        render: function() {
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.quantityInput = this.$(".input-number");
            this.removeBtn = this.$(".remove");
        }

    });

});
