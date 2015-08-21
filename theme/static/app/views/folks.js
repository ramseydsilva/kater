define([
    "backbone",
    "underscore",
    "text!templates/folks.html",
    "../collections/category",
    "../collections/search"
], function(Backbone, _, template, CategoryCollection, SearchCollection) {

    return Backbone.View.extend({

        template: _.template(template),

        categories: [],
        location: null,

        events: {
            "click td": "selectCategory",
            "click #search": "search",
            "click [href='/jobs']": "searchJobs"
        },

        initialize: function() {
            var view = this;
            this.render();
        },

        search: function() {
            this.location = app.map.getCenter();
        },

        render: function() {
            this.html = $(this.template({
            }));
            this.$el.html(this.html);
        }

    });

});
