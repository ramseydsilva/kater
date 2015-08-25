define([
    "core/view",
    "underscore",
    "text!templates/caterer.html",
    "./item-category",
    "./review"
], function(View, _, template, ItemCategoryView, ReviewView) {

    return View.extend({

        template: _.template(template),

        events: {
            "submit .reviewForm": "submitReview",
            "mouseover .editable.ratingStars i": "mouseOverStars",
            "mouseout .editable.ratingStars i": "mouseOutStars",
            "click .editable.ratingStars i": 'clickStars'
        },

        initialize: function(options) {
            var that = this;
            this.slug = options.arguments[0];
            this.model = this.getModel();
            if (!this.model) {
                app.collections.caterer.fetch({
                    data: {
                        slug: that.slug
                    },
                    success: function() {
                        that.model = that.getModel();
                        if (that.model) that.render();
                    }
                })
            } else {
                this.render();
            }
        },

        show: function(arguments) {
            var slug = arguments[0];
            if (slug != this.slug) {
                this.slug = slug;
                this.model = this.getModel();
                this.render();
            }
            this.$el.show();
        },

        clickStars: function(e) {
            var current = $(e.target);
            current.parent().children().removeClass("selected").removeClass("selected-temp");
            current.parent().children().each(function(i, sibling) {
                if (parseInt(sibling.attributes.value.value) <= current.attr("value")) {
                    sibling.classList.add("selected");
                }
            });
            this.reviewForm.rating[current.attr("item")] = current.attr("value");
        },

        mouseOverStars: function(e) {
            var current = $(e.target);
            var all_stars = current.parent().find("i");
            all_stars.removeClass("red");
            current.parent().find(".selected").addClass("selected-temp").removeClass("selected");
            current.parent().children().each(function(i, sibling) {
                if (parseInt(sibling.attributes.value.value) <= current.attr("value")) {
                    sibling.classList.add("red");
                }
            });
        },

        mouseOutStars: function(e) {
            var before,
                after,
                current = $(e.target);
            var all_stars = current.parent().find("i");
            all_stars.removeClass("red");
            current.parent().find(".selected-temp").addClass("selected");
        },

        getModel: function() {
            return app.collections.caterer.findWhere({slug: this.slug});
        },

        addItemCategory: function(model) {
            if (!model.view) {
                model.view = new ItemCategoryView({
                   model: model 
                });
            }
            this.menu.append(model.view.$el);
        },

        submitReview: function(e) {
            var that = this;
            e.preventDefault();
            this.model.reviews.create({
                first_name: this.reviewForm.first_name.val(),
                last_name: this.reviewForm.last_name.val(),
                email: this.reviewForm.email.val(),
                mobile_number: this.reviewForm.mobile_number.val(),
                title: this.reviewForm.title.val(),
                description: this.reviewForm.description.val(),
                caterer: this.model.id,
                rating: [{
                    food: this.reviewForm.rating.food,
                    service: this.reviewForm.rating.service,
                    ambience: this.reviewForm.rating.ambience,
                    value: this.reviewForm.rating.value
                }]
            }, {
                wait: true,
                error: function() {
                    that.formError.html("<strong>Error:</strong> All fields are required.").removeClass("hidden");
                },
                success: function() {
                    that.postRvwForm.html("<p>Thank you for your feedback. Your review has been posted.</p>");
                }});
            return false;
        },

        addReview: function(model, collection, response) {
            if (!model.view) {
                model.view = new ReviewView({
                   model: model 
                });
            }
            this.reviewList.append(model.view.$el);
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.menu = this.$(".myMenu .menudtL");
            this.reviewList = this.$(".reviewList");
            this.formError = this.$(".formError");
            this.postRvwForm = this.$(".postRvwForm");
            this.reviewForm = {
                first_name: this.$("input[name='first_name']"),
                last_name: this.$("input[name='last_name']"),
                email: this.$("input[name='email']"),
                mobile_number: this.$("input[name='mobile_number']"),
                title: this.$("input[name='title']"),
                description: this.$("textarea[name='description']"),
                rating: {}
            }
            this.model.menu.models.forEach(function(model) {
                that.addItemCategory(model);
            });
            this.model.menu.on("add", this.addItemCategory, this);
            this.model.reviews.models.forEach(function(model) {
                that.addReview(model);
            });
            this.model.reviews.on("add", this.addReview, this);

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
