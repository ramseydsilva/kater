define([
    "core/authSync",
    "moment"
], function(authSync, moment) {
    "use strict";

    return authSync.Model.extend({

        initialize: function() {
            this.setCity();
            this.setCategory();
            this.on("change:start_date", this.setDate, this);
            this.on("change:end_date", this.setDate, this);
            this.on("change:city", this.setCity, this);
            this.on("change:category", this.setCategory, this);
        },

        startDate: function() {
            return moment(this.attributes.start_date).format('DD MMM, dddd');
        },
        startTime: function() {
            return moment(this.attributes.start_date).format('h:mm A');
        },

        endDate: function(date) {
            return moment(this.attributes.end_date).format('ddd, DD MMM');
        },

        endTime: function(date) {
            return moment(this.attributes.end_date).format('h:mm A');
        },
        
        setCity: function() {
            this.city = app.collections["city"].findWhere({id: parseInt(this.attributes.city)});
        },

        setCategory: function() {
            this.category = app.collections["category"].findWhere({id: parseInt(this.attributes.category)});
        },

        getSkills: function() {
            var to_return = '';
            this.attributes.skills.forEach(function(skill) {
                var skill = app.collections["skill"].findWhere({id: skill});
                if (skill) to_return += ", " + skill.attributes.title; 
            });
            return to_return.substr(2)
        },

        getUrl: function() {
            return "/jobs/" + this.id + "/";
        },

        parse: function(response, object) {
            response.latitude = parseFloat(response.latitude);
            response.longitude = parseFloat(response.longitude);
            return response;
        }

    });

});
