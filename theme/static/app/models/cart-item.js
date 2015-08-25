define([
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function(attrs, options) {
            this.item = attrs['item_model'];
        },

        getSubTotal: function() {
            return this.item.attributes.price * this.attributes.quantity;
        }

    });

});
