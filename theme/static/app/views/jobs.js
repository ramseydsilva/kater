define([
    "core/view",
    "underscore",
    "text!templates/jobs.html",
    "../collections/category",
    "../collections/search",
    "../views/job-list-item"
], function(View, _, template, CategoryCollection, SearchCollection, JobListView) {

    return View.extend({

        template: _.template(template),
        
        rendered: $.Deferred(),

        events: {
        
        },

        initialize: function() {
            var that = this;
            this.render();
            app.collections["job"].forEach(function(model) {
                that.addJob(model);
            });
            app.collections["job"].on("add", this.addJob, this);
            app.collections["job"].fetch()
        },

        addJob: function(model) {
            if (!model.list_view) {
                model.list_view = new JobListView({
                    model: model
                });
            }
            this.jobList.append(model.list_view.$el);
        },

        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.jobList = this.$el.find("#jobs-list");
            this.rendered.resolve();
        }

    });

});
