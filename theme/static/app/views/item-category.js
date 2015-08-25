define([
    "core/view",
    "underscore",
    "text!templates/item-category.html",
    "./item"
], function(View, _, template, ItemView) {

    return View.extend({

        template: _.template(template),

        el : $('<div class="mainmaenu clearfix"></div>'),

        events: {
            'click .me2SlctBtn': 'showItems'
        },

        initialize: function() {
            this.render();
        },

		showItems: function(e) {
		    var $el = $(e.currentTarget);
			if($el.hasClass("active")){
				$el.removeClass("active");
				$el.text("Select Items");
            	$el.parent().parent().parent().next().slideUp();
			}
			else {
				$el.addClass("active");
				$el.text("Close");
            	$el.parent().parent().parent().next().slideDown();
			}
        },

        addItem: function(model) {
            if (!model.view) {
                model.view = new ItemView({
                    model: model
                });
            }
            this.itemList.append(model.view.$el);
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                model: this.model
            }));
            this.$el.html(this.html);
            this.itemList = this.$('.item-list');
            this.model.items.forEach(function(model) {
                that.addItem(model);
            })
        }

    });

});
