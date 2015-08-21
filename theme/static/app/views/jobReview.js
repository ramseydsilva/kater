define([
    "backbone",
    "underscore",
    "text!templates/job.html",
    "jqueryUI"
], function(Backbone, _, template) {

    return Backbone.View.extend({

        template: _.template(template),

        events: {
            "click #saveJob": "saveJob"
        },

        initialize: function(options) {
            this.render();
            this.jobCollection = options.jobCollection;
            this.model.on("change", this.reRender, this);
        },

        saveJob: function() {
            this.jobCollection.create(this.model.attributes, {
                wait: true,
                success: function(model) {
                   app.router.navigate(model.getUrl(), true);
                }
            });
        },

        reRender: function() {
            this.render();
        },

        render: function() {
            var view = this;
            app.changePageTitle(this.model.attributes.title);
            this.html = $(this.template({
                review: true,
                model: view.model
            }));
            this.$el.html(this.html);
        }

    });

});
