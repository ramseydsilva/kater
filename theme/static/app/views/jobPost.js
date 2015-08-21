define([
    "backbone",
    "underscore",
    "text!templates/jobPost.html",
    "../models/job",
    "jqueryUI",
    "css!jqueryUICSS",
    "timepicker"
], function(Backbone, _, template, JobModel) {

    return Backbone.View.extend({

        template: _.template(template),
        
        job: new JobModel(),

        events: {
            "click #post-submit": "postReview"
        },

        initialize: function(options) {
            var view = this;
            this.categoryCollection = options.categoryCollection;
            this.skillCollection = options.skillCollection;
            this.render();
        },
        
        validate: function(attrs) {
            if (!attrs.category) {
                return "Select a category"
            }
            if (!attrs.skills.length) {
                return "Select atleast one skill"
            }
            if (!attrs.title) {
                return "Enter a job title"
            }
            if (!attrs.description) {
                return "Enter a job description"
            }
            if (!attrs.start_date) {
                return "Enter a start date"
            }
            if (!attrs.end_date) {
                return "Enter a end date"
            }
            if (!attrs.start_time) {
                return "Enter a start time"
            }
            if (!attrs.end_time) {
                return "Enter a end time"
            }
            if (!attrs.hourly_rate) {
                return "Enter an hourly rate"
            }
        },
             
        postReview: function(e) {
            var category_id = '';
            var skills_ids = [];
            var category = app.collections["category"].findWhere({selected: true});
            if (category) {
                category_id = category.id
            }
            app.collections["skill"].where({selected: true}).each(function(skill) {
               skills_ids.push(skill.id); 
            });
            var attrs = {
                title: this.jobTitle.val(),
                description: this.$("#jobDescription").val(),
                start_date: this.$("#startDate").val(),
                start_time: this.$("#startTime").val(),
                end_date: this.$("#endDate").val(),
                end_time: this.$("#endTime").val(),
                hourly_rate: this.$("#hourlyRate").val(),
                currency: this.$("#currency").val(),
                number: this.$("#number").val(),
                latitude: app.map && app.map.getCenter().G,
                longitude: app.map && app.map.getCenter().K,
                category: category_id,
                skills: skills_ids,
                city: $("#city").val(),
                address: $("#address").val()
            };
            var error = this.validate(attrs);
            if (error) {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.error.removeClass("hidden");
            } else {
                attrs.start_date = new Date(attrs.start_date + " " + attrs.start_time);
                attrs.end_date = new Date(attrs.end_date + " " + attrs.end_time);
                delete attrs["start_time"];
                delete attrs["end_time"];
                this.job.set(attrs);
                this.error.addClass("hidden");
            }
            this.error.text(error);
        },

        initializeTimePicker: function() {
            ng.browser.loaded = true;
            ng.ready( function() {
                var tmpkr1 = new ng.TimePicker({
                    input: 'startTime',
                    placement:'tlbl'
                });
                var tmpkr2 = new ng.TimePicker({
                    input: 'endTime',
                    placement:'tlbl'
                });
            });
        },

        render: function() {
            var view = this;
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.jobTitle = this.$("#jobTitle");
            this.jobDescription = this.$("#jobDescription");
            this.startDate = this.$("#startDate");
            this.startTime = this.$("#startTime");
            this.endDate = this.$("#endDate");
            this.endTime = this.$("#endTime");
            this.hourlyRate = this.$("#hourlyRate");
            this.currency = this.$("#currency");
            this.numberPeople = this.$("#numberPeople");
            this.startDate.datepicker();
            this.endDate.datepicker();
            this.error = this.$("#jobPostError");
            view.initializeTimePicker();
        }

    });

});
