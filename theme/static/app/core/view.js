define([
    'backbone',
    'underscore'
], function(Backbone, _) {

    var View = Backbone.View.extend({
        
        promise: $.Deferred(),
        
        initialize: function(options) {
            var that = this;
            this.options = options;
            Backbone.View.prototype.initialize.apply(this, arguments);
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide();
        }
    });

    return View;

});