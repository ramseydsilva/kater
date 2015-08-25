define([
    "core/view",
    "underscore",
    "text!templates/brand-carousel.html",
    "jquery-nstslider"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);

            this.$('.nstSlider').nstSlider({
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_bar_selector": ".bar",
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    that.$('.leftLabel').val(leftValue).trigger("change");
                    that.$('.rightLabel').val(rightValue).trigger("change");
                }
            });

        }

    });

});
