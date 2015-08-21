define([
    "backbone",
    "../models/skill"
], function (Backbone, SkillModel) {
    "use strict";
    
    return Backbone.Collection.extend({
        model: SkillModel,
        url: '/api/skills'
    });

});