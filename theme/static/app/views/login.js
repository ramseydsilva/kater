define([
    "backbone",
    "underscore",
    "text!templates/login.html",
], function(Backbone, _, template) {

    return Backbone.View.extend({

        template: _.template(template),

        events: {
            "submit form": "formSubmit"
        },

        initialize: function() {
            this.render();
        },

        formSubmit: function(e) {
            var that = this;
            e.preventDefault();
            app.user.fetch({
                url: '/api/login/',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(that.emailInput.val() + ":" + that.passwordInput.val()));
                },
                success: function() {
                    app.router.navigate("/", true);
                },
                fail: function() {
                    console.log(arguments);
                }
            });
        },

        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.emailInput = this.$("#emailInput");
            this.passwordInput = this.$("#passwordInput");
        }

    });

});
