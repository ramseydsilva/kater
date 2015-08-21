define([
    "backbone",
    "../collections/skill"
], function(Backbone, SkillCollection) {
    "use strict";

    return Backbone.Model.extend({

        initialize: function() {
            this.skills = [];
        }

    });

});
