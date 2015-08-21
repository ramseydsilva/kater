define([
    "backbone"
], function(Backbone) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function(options) {
            this.category = app.collections["category"].findWhere({id: this.attributes.parent});
            this.category && this.category.skills.push(this);
        }

    });

});
