define([
    "core/collection",
    "../models/cart-item"
], function (Collection, CartItemModel) {
    "use strict";
    
    return Collection.extend({

        model: CartItemModel,

        initialize: function(model, options) {
        }

    });

});
