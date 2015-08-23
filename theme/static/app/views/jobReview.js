define([
    "core/view",
    "underscore",
    "text!templates/job.html",
    "jqueryUI"
], function(View, _, template) {

    return View({

        template: _.template(template),

        events: {
            "click #saveJob": "saveJob"
        },

        initialize: function(options) {
            this.render();
            app.views["jobPost"].job.on("change", this.reRender, this);
        },

        saveJob: function() {
            app.collections.job.create(app.views["jobPost"].job.attributes, {
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
            app.changePageTitle(app.views["jobPost"].job.attributes.title);
            this.html = $(this.template({
                review: true,
                model: app.views["jobPost"].job
            }));
            this.$el.html(this.html);
        }

    });

});
