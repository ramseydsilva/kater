define([
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function(options) {
            var that = this;
            if (this.attributes.parent) {
                app.promises.categoryLoaded.done(function() {
                    that.category = app.collections["category"].findWhere({id: that.attributes.parent});
                    that.category && that.category.skills.push(that);               
                });
            }
        }

    });

});
