define([
    "core/view",
    "underscore",
    "text!templates/checkout.html",
    "./checkout-item"
], function(View, _, template, CartItemView) {

    return View.extend({

        template: _.template(template),

        events: {
            'click input[name="payments"]': 'selectPayment',
            'click .showLoginModal': 'showLoginModal'
        },

        initialize: function() {
            this.model = app.cart;
            this.render();
            app.cart.items.on("add", this.addToCart, this);
            app.cart.on("change:sub_total", this.changeTotal, this);
            app.cart.on("change:special_request", this.changeSpecialRequest, this);
        },
        
        showLoginModal: function(e) {
            e.preventDefault();
            app.components["user-nav"].view.showLoginModal();
        },

        selectPayment: function(e) {
            var $el = $(e.currentTarget);
            if($el.attr("value")=="creditcard"){ 
                $("#selectpayment").show(); 
            }
            if($el.attr("value")=="cashcard"){
                $("#selectpayment").hide(); 
            } 
        },

        addToCart: function(cart_item) {
            if (!cart_item.checkout_view) {
                cart_item.checkout_view = new CartItemView({
                    model: cart_item
                });
            }
            this.listItem.append(cart_item.checkout_view.$el);
        },
        
        changeTotal: function() {
            this.sub_total.text(app.cart.get("sub_total")+"KD");
            this.discount.text(app.cart.get("discount")+"KD");
            this.grand_total.text(app.cart.get("grand_total")+"KD");
        },

        changeSpecialRequest: function() {
            this.special_request.text(app.cart.attributes.special_request);
        },

        show: function() {
            if (!app.cart.items.length) {
                app.router.navigate("/my-cart", {trigger: true});
            } else {
                this.$el.show();
            }
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                model: this.model,
                loggedIn: app.user.attributes.username
            }));
            this.$el.html(this.html);
            this.listItem = this.$('#checkout-items');

            this.model.items.each(function(cart_item) {
                that.addToCart(cart_item);  
            });
            
            this.sub_total = this.$(".sub_total");
            this.special_request = this.$(".special-request")
            this.discount = this.$(".discount");
            this.grand_total = this.$(".grand_total");
            this.promise.resolve();
        }

    });

});
