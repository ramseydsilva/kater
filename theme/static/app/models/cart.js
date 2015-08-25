define([
    "core/authSync",
    "../collections/cart-item"
], function(authSync, CartItemCollection) {
    "use strict";

    return authSync.Model.extend({

        defaults: {
            sub_total: 0,
            discount: 0,
            grand_total: 0
        },

        initialize: function() {
            this.items = new CartItemCollection();
            this.on("change:sub_total", this.calculateGrandTotal, this);
            this.items.on("reset", this.calculateSubTotal, this);
            this.items.on("remove", this.calculateSubTotal, this);
            this.items.on("change:quantity", this.calculateSubTotal, this);
            this.items.on("add", this.calculateSubTotal, this);
        },

        calculateSubTotal: function() {
            var total = 0;
            this.items.each(function(cart_item) {
                total += (parseInt(cart_item.item.attributes.price)*cart_item.attributes.quantity);
            });
            this.set("sub_total", total);
        },

        calculateGrandTotal: function() {
            var grand_total = this.get("sub_total") * ((100-this.get("discount"))/100)
            this.set("grand_total", grand_total);
        },

        clearAll: function() {
            this.items.each(function(model) {
                model.trigger("remove");
            });
            this.items.reset();
        },

        getCartItem: function(item) {
            var to_return = null;
            this.items.each(function(cart_item) {
                if (cart_item.item == item.id) {
                    to_return = cart_item
                }
            });
            return to_return;
        }

    });

});
