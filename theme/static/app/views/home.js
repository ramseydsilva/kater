define([
    "core/view",
    "underscore",
    "text!templates/home.html",
    "bootstrap-datepicker"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            "click .advancelink": 'toggleAdvancedOptions',
            "change #area-select": 'selectArea',
            "change #category-select": 'selectCategory',
            "changeDate .datepicker": 'selectDate',
            'click #arabic-speaking-only-checkbox': 'selectArabicSpeakingOnly',
            'click #all-female-servers-checkbox': 'selectAllFemaleServers',
            'change #price-lower-input': 'selectPriceLower',
            'change #price-upper-input': 'selectPriceUpper',
            'change #capacity-lower-input': 'selectCapacityLower',
            'change #capacity-upper-input': 'selectCapacityUpper',
            "click #searchBtn": "filterCaterers"
        },

        initialize: function() {
            var that = this;
            this.render();
            app.collections.area.forEach(function(model) {
                that.addArea(model);
            });
            app.collections.area.on("add", this.addArea, this);
            app.collections.category.forEach(function(model) {
                that.addCategory(model);
            });
            app.collections.category.on("add", this.addCategory, this);
            app.filter.on("change:area", this.changeArea, this);
            app.filter.on("change:category", this.changeCategory, this);
            app.filter.on("change:date", this.changeDate, this);
        },

        filterCaterers: function(e) {
            e.preventDefault();
            if (app.components.caterers.view) app.components.caterers.view.fetchCaterers();
        },

        addArea: function(model) {
            var selected = '';
            if (model.id == app.filter.attributes.area) {
                selected = 'selected="selected"';
            }
            this.areaSelect.append('<option value="'+model.id+'" '+selected+'>'+model.attributes.name+'</option>');
        },

        addCategory: function(model) {
            var selected = '';
            if (model.id == app.filter.attributes.category) {
                selected = 'selected="selected"';
            }
            this.categorySelect.append('<option value="'+model.id+'" '+selected+'>'+model.attributes.title+'</option>');
        },

        changeArea: function(model) {
            this.areaSelect.val(model.attributes.area);
        },

        changeCategory: function(model) {
            this.categorySelect.val(model.attributes.category);
        },

        changeDate: function(model) {
            this.datepicker.val(model.attributes.date);
        },

        selectArea: function(e) {
            var val = this.areaSelect.val();
            if (val) {
                app.filter.set("area", parseInt(val));
            } else {
                app.filter.set("area", null);
            }
        },

        selectCategory: function(e) {
            var val = this.categorySelect.val();
            if (val) {
                app.filter.set("category", parseInt(val));
            } else {
                app.filter.set("category", null);
            }
        },

        selectDate: function(e) {
            app.filter.set("date", this.datepicker.val());
        },

        selectPriceLower: function() {
            app.filter.set("price_lower", this.price_lower.val());
        },

        selectPriceUpper: function() {
            app.filter.set("price_upper", this.price_upper.val());
        },

        selectCapacityLower: function() {
            app.filter.set("capacity_lower", this.capacity_lower.val());
        },

        selectCapacityUpper: function() {
            app.filter.set("capacity_upper", this.capacity_upper.val());
        },
        
        selectAllFemaleServers: function() {
            app.filter.set("all_female_servers", this.all_female_servers.is(":checked"));
        },

        selectArabicSpeakingOnly: function() {
            app.filter.set("arabic_speaking_only", this.arabic_speaking_only.is(":checked"));
        },

        toggleAdvancedOptions: function() {
            this.advanceBox.toggle();
        },

        render: function() {
            var that = this;

            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.areaSelect = this.$('#area-select');
            this.categorySelect = this.$('#category-select');
            this.datepicker = this.$('.datepicker');
            this.advanceBox = this.$(".advncebox");
            this.datepicker.datepicker();
            require(["jquery-carousel", "jquery-carousel-responsive"]);
            this.price_lower = this.$('#price-lower-input');
            this.price_upper = this.$('#price-upper-input');
            this.capacity_lower = this.$('#capacity-lower-input');
            this.capacity_upper = this.$('#capacity-upper-input');
            this.all_female_servers = this.$('#all-female-servers-checkbox');
            this.arabic_speaking_only = this.$('#arabic-speaking-only-checkbox');
        }

    });

});
