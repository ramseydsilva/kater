define([
    "./home",
    "underscore",
    "text!templates/find-caterers.html",
    "bootstrap-datepicker",
    "jquery-nstslider"
], function(HomeView, _, template) {

    return HomeView.extend({

        template: _.template(template),

        events: {
            "click .advcebtn": 'toggleAdvancedOptions',
            "change #area-select2": 'selectArea',
            "change #category-select2": 'selectCategory',
            "changeDate .datepicker": 'selectDate',
            "submit form": "filterCaterers",
            'click #arabic-speaking-only-checkbox2': 'selectArabicSpeakingOnly',
            'click #all-female-servers-checkbox2': 'selectAllFemaleServers',
            'change #price-lower-input2': 'selectPriceLower',
            'change #price-upper-input2': 'selectPriceUpper',
            'change #capacity-lower-input2': 'selectCapacityLower',
            'change #capacity-upper-input2': 'selectCapacityUpper',
        },

        toggleAdvancedOptions: function(e) {
			this.hideAdvance.toggle();
			this.advanceBtn.toggleClass('arrown');
        },

        render: function() {
            var that = this;

            this.html = $(this.template({
                filter: app.filter
            }));
            this.$el.html(this.html);

            this.areaSelect = this.$('#area-select2');
            this.categorySelect = this.$('#category-select2');
            this.hideAdvance = this.$(".hideadvance");
            this.advanceBtn = this.$(".advcebtn");
            this.datepicker = this.$('.datepicker');
            this.datepicker.datepicker();
            this.price_lower = this.$('#price-lower-input2');
            this.price_upper = this.$('#price-upper-input2');
            this.capacity_lower = this.$('#capacity-lower-input2');
            this.capacity_upper = this.$('#capacity-upper-input2');
            this.all_female_servers = this.$('#all-female-servers-checkbox2');
            this.arabic_speaking_only = this.$('#arabic-speaking-only-checkbox2');

            this.$('.nstSlider').nstSlider({
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_bar_selector": ".bar",
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    that.$('.leftLabel').val(leftValue).trigger("change");
                    that.$('.rightLabel').val(rightValue).trigger("change");
                }
            });

            var $document = $(document),
                $elementx = this.$('.filterbox'),
                $elementsidebar = this.$('.sideBar'),
                classNamex = 'hoveradd';
                sideclassName = 'sidebarhoverad';

            $(window).scroll(function() {
                $elementx.toggleClass(classNamex, $document.scrollTop() >= 50);
                $elementsidebar.toggleClass(sideclassName, $document.scrollTop() >= 50);
            });
            
        }

    });

});
