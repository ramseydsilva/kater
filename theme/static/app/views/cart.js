define([
    "core/view",
    "underscore",
    "text!templates/cart.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
            this.render();
            app.cart.items.on("add", this.addToCart, this);
            app.cart.items.on("change:quantity", this.changeQuantity, this);
            app.cart.items.on("reset", this.removeAll, this);
            app.cart.items.on("remove", this.removeFromCart, this);
            app.cart.on("change:sub_total", this.updateTotal, this);
        },

        addToCart: function(cart_item) {
            var total_price = cart_item.attributes.quantity * cart_item.item.attributes.price;
            $('<tr class="cart-items" id="'+cart_item.item.id+'"><td>'+cart_item.item.attributes.title+'</td><td>'+cart_item.attributes.quantity+'</td><td>'+cart_item.item.attributes.price+'KD</td><td>'+total_price+'KD</td></tr>').insertBefore(this.total.parent());
        },

        removeFromCart: function(cart_item) {
            this.cartTable.find('#'+cart_item.item.id).remove();
        },
        
        removeAll: function() {
            this.cartTable.find("tr.cart-items").remove();
        },
        
        changeQuantity: function(cart_item) {
            this.removeFromCart(cart_item);
            this.addToCart(cart_item)
        },

        updateTotal: function() {
            this.total.text(app.cart.get("sub_total")+"KD");
        },

        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.cartTable = this.$(".cart-table");
            this.total = this.$(".total");

            var $document = $(document),
                $elementx = this.$('.myCartWgt'),
                $elementsidebar = this.$('.sideBar'),
                classNamex = 'hoveradd';
                sideclassName = 'sidebarhoverad';

            $(window).scroll(function() {
                $elementx.toggleClass(classNamex, $document.scrollTop() >= 50);
                $elementsidebar.toggleClass(sideclassName, $document.scrollTop() >= 50);
            });
        }

    });

});
