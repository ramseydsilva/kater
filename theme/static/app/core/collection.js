define([
    "core/authSync"
], function (authSync) {
    "use strict";
    
    return authSync.Collection.extend({

        selectMultiple: false,

        initalize: function() {
            
        },

        unselectAll: function() {
            this.set('selected', false);
        },
        
        select: function(model) {
            if (this.selectMultiple) {
                this.set('selected', false);
            }
            model.set("selected", true);
        },

        unselect: function(model) {
            model.set("selected", false);
        }
        
    });

});
