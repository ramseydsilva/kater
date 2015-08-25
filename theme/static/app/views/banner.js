define([
    "core/view",
    "underscore",
    "text!templates/banner.html",
    "jquery-bxslider"
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
            this.$(".bxslider").bxSlider({
                auto: true	 ,
                  nextSelector: '#slider-next',
                  prevSelector: '#slider-prev',
            });
        }

    });

});
