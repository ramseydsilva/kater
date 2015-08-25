define([
    "core/view",
    "underscore",
    "text!templates/profile.html",
    "bootstrap-datepicker"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            'submit .profileForm': 'submitProfileForm',
            'submit .billingAddressForm': 'submitBillingAddressForm'
        },

        onProfileError: function() {
            this.profileAlert.html("<strong>Error</strong> There was an error while saving. Please try again.").removeClass("hidden");
        },

        onProfileSuccess: function() {
            this.profileAlert.html("<strong>Success</strong> Your changes has been successfully saved.").removeClass("hidden");
        },

        initialize: function() {
            this.model = app.user;
            this.render();
            this.model.on("change", this.updateProfile, this);
            this.model.profile.on("change", this.updateProfile, this);
        },

        submitBillingAddressForm: function(e) {
            var that = this;
            e.preventDefault();
            this.model.billing.save({
                first_name: this.b_firstNameInput.val(),
                last_name: this.b_lastNameInput.val(),
                mobile_number: this.b_mobileNumberInput.val(),
                email: this.b_emailInput.val(),
                street_address1: this.b_streetAddress1Input.val(),
                street_address2: this.b_streetAddress2Input.val(),
                area: this.b_areaInput.val()
            }, {
                success: function() {
                    that.billingAlert.html("<strong>Error</strong> There was an error while saving. Please try again.").removeClass("hidden");
                }, error: function() {
                    that.billingAlert.html("<strong>Success</strong> Your changes has been successfully saved.").removeClass("hidden");
                }
            });
        },

        submitProfileForm: function(e) {
            var that = this;
            e.preventDefault();
            this.model.save({
                first_name: this.firstNameInput.val(),
                last_name: this.lastNameInput.val()
            }, {
                success: function() {
                    that.model.profile.save({
                        mobile_number: that.mobileNumberInput.val(),
                        other_number: that.otherNumberInput.val(),
                        birthday: that.birthdayInput.val() ? new Date(that.birthdayInput.val()) : null,
                        occupation: that.occupationInput.val(),
                        sex: that.sexInput.val(),
                        subscribe_newsletter: that.subscribeInput.is(":checked"),
                        send_sms: that.sendSMSInput.is(":checked"),
                    }, {
                        patch: true,
                        success: _.bind(that.onProfileSuccess, that),
                        error: _.bind(that.onProfileError, that)
                    });
                },
                error: _.bind(that.onProfileError, that)
            });
        },

        updateProfile: function() {
            this.firstNameInput.val(this.model.attributes.first_name);
            this.lastNameInput.val(this.model.attributes.last_name);
            this.mobileNumberInput.val(this.model.profile.attributes.mobile_number);
            this.otherNumberInput.val(this.model.profile.attributes.other_number);
            this.birthdayInput.val(this.model.profile.attributes.birthday);
            this.occupationInput.val(this.model.profile.attributes.occupation);
            this.sexInput.val(this.model.profile.attributes.profile);
            this.subscribeInput.val(this.model.profile.attributes.subscribe_newsletter);
            this.sendSMSInput.val(this.model.profile.attributes.send_sms);
        },

        updateBillingAddress: function() {
            this.b_firstNameInput.val(this.model.billing.attributes.first_name);
            this.b_lastNameInput.val(this.model.billing.attributes.last_name);
            this.b_mobileNumberInput.val(this.model.billing.attributes.mobile_number);
            this.b_emailInput.val(this.model.billing.attributes.email);
            this.b_streetAddress1Input.val(this.model.billing.attributes.street_address1);
            this.b_streetAddress2Input.val(this.model.billing.attributes.street_address2);
            this.b_areaInput.val(this.model.billing.attributes.area);

        },
        
        render: function() {
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.$(".datepicker").datepicker();
            
            this.firstNameInput = this.$("[name='first_name']");
            this.lastNameInput  = this.$("[name='last_name']");
            this.mobileNumberInput = this.$("[name='mobile_number']");
            this.otherNumberInput = this.$("[name='other_number']");
            this.birthdayInput = this.$("[name='birthday']");
            this.occupationInput = this.$("[name='occupation']");
            this.sexInput = this.$("[name='sex']");
            this.subscribeInput = this.$("[name='subscribe_newsletter']");
            this.sendSMSInput = this.$("[name='send_sms']");

            this.b_firstNameInput = this.$("[name='first_name']");
            this.b_lastNameInput  = this.$("[name='last_name']");
            this.b_mobileNumberInput = this.$("[name='mobile_number']");
            this.b_emailInput = this.$("[name='billing_email']");
            this.b_streetAddress1Input = this.$("[name='billing_street_address1']");
            this.b_streetAddress2Input = this.$("[name='billing_street_address2']");
            this.b_areaInput = this.$("[name='billing_area']");

            this.profileAlert = this.$(".profileAlert");
            this.passwordAlert = this.$(".passwordAlert");
            this.emailAlert = this.$(".emailAlert");
            this.billingAlert = this.$(".billingAlert");

            var $document = $(document),
                $element = this.$('.customTabs'),
                $elements = this.$('.contentbdox'),
                className = 'hoveradds';
                classNames = 'extraspace';
		
            $document.scroll(function() {
                $element.toggleClass(className, $document.scrollTop() >= 300);
                $elements.toggleClass(classNames, $document.scrollTop() >= 300);
            });
        }

    });

});
