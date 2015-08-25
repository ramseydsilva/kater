define([
    "core/view",
    "underscore",
    "text!templates/user-nav.html"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            'click .loginBtn': 'showLoginModal',
            'click .logoutBtn': 'logOut'
        },

        initialize: function() {
            this.render();
            app.user.on("change:username", this.refreshBtn, this);
        },

        showLoginModal: function() {
            this.loginModal.modal("show");
        },

        logOut: function(e) {
            e.preventDefault();
            app.user.logout();
        },

        loginUser: function(e) {
            var that = this;
            e.preventDefault();
            app.user.fetch({
                url: '/api/login',
                headers: {
                    XUSERNAME: that.usernameInput.val(),
                    XPASSWORD: that.passwordInput.val()
                },
                success: function(model, response, options) {
                    if (model.id) {
                        that.loginModal.modal("hide");
                        that.loginError.html("").addClass("hidden");
                    }
                },
                error: function(model, response, options) {
                    that.loginError.html("<strong>Error</strong> Incorrect username or password").removeClass("hidden");
                }
            });
        },

        registerUser: function(e) {
            var that = this;
            e.preventDefault();
            app.user.fetch({
                url: '/api/register/',
                method: "POST",
                data: {
                    first_name: that.firstNameInput.val(),
                    last_name: that.lastNameInput.val(),
                    email: that.emailInput.val(),
                    mobile_number: that.mobileNumberInput.val(),
                    street_address1: that.streetAddress1Input.val(),
                    street_address2: that.streetAddress2Input.val(),
                    area: that.areaSelect.val(),
                    username: that.usernameInput2.val(),
                    password: that.passwordInput2.val()
                },
                success: function(model, response, options) {
                    if (model.id) {
                        that.loginModal.modal("hide");
                        that.registerError.html("").addClass("hidden");
                    }
                },
                error: function(model, response, options) {
                    that.registerError.html("<strong>Error</strong> "+response.responseJSON.error).removeClass("hidden");
                }
            });
        },

        refreshBtn: function() {
            if (app.user.attributes.username) {
                this.logoutBtns.removeClass("hidden");
                this.loginBtns.addClass("hidden");
            } else {
                this.loginBtns.removeClass("hidden");
                this.logoutBtns.addClass("hidden");
            }
        },

        addArea: function(model) {
            var selected = '';
            if (model.id == app.filter.attributes.area) {
                selected = 'selected="selected"';
            }
            this.areaSelect.append('<option value="'+model.id+'" '+selected+'>'+model.attributes.name+'</option>');
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                loggedIn: app.user.attributes.username
            }));
            this.$el.html(this.html);
            this.areaSelect = this.$('#area-select2');
            app.collections.area.forEach(function(model) {
                that.addArea(model);
            });
            app.collections.area.on("add", this.addArea, this);
            this.loginBtn = this.$('.loginBtn');
            this.loginBtns = this.$('.loginBtns');
            this.logoutBtns = this.$('.logoutBtns');
            this.usernameInput = $(".usernameInput");
            this.passwordInput = $(".passwordInput");
            this.firstNameInput = $(".firstNameInput");
            this.lastNameInput = $(".lastNameInput");
            this.emailInput = $(".emailInput");
            this.mobileNumberInput = $(".mobileNumberInput");
            this.streetAddress1Input = $(".streetAddressInput");
            this.streetAddress2Input = $(".streetAddress2Input");
            this.areaSelect = $("#area-select2");
            this.usernameInput2 = $(".usernameInput2");
            this.passwordInput2 = $(".passwordInput2");
            this.loginModal = $("#loginModal");
            this.loginError = $(".loginError");
            this.registerError = $(".registerError");
            $('.registerForm').submit(function(e) {
                that.registerUser(e);
            });
            $('.loginForm').submit(function(e) {
                that.loginUser(e);
            });
        }

    });

});
