define([
    "core/view",
    "underscore",
    "text!templates/my-cart.html",
    "./main-cart-item"
], function(View, _, template, CartItemView) {

    return View.extend({

        template: _.template(template),

        events: {
            'click .clear-all': 'clearAll',
            'click .add-more': 'addMore',
            'change .special-request': 'changeSpecialRequest'
        },

        initialize: function() {
            this.model = app.cart;
            this.render();

            app.cart.items.on("add", this.addToCart, this);
            app.cart.on("change:sub_total", this.changeTotal, this);
        },

        addToCart: function(cart_item) {
            if (!cart_item.view) {
                cart_item.view = new CartItemView({
                    model: cart_item
                });
            }
            this.listItem.append(cart_item.view.$el);
        },

        changeTotal: function() {
            this.sub_total.text(app.cart.get("sub_total")+"KD");
            this.discount.text(app.cart.get("discount")+"KD");
            this.grand_total.text(app.cart.get("grand_total")+"KD");
            if (app.cart.get("sub_total") > 0) {
                this.checkoutBtn.removeClass("hidden");
            } else {
                this.checkoutBtn.addClass("hidden");
            }
        },

        changeSpecialRequest: function() {
            app.cart.set("special_request", this.special_request.val());
        },

        addMore: function() {
            url = "/caterers";
            app.router.navigate(url, {trigger: true});
        },

        clearAll: function() {
            app.cart.clearAll();
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.listItem = this.$('#cart-items');
            this.sub_total = this.$(".sub_total");
            this.special_request = this.$(".special-request")
            this.discount = this.$(".discount");
            this.grand_total = this.$(".grand_total");
            this.checkoutBtn = this.$(".checkoutBtn");
            this.model.items.each(function(cart_item) {
                that.addToCart(cart_item);  
            });
        }

    });

});
