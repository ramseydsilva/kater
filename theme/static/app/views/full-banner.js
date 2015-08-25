define([
    "core/view",
    "underscore",
    "text!templates/full-banner.html",
    "jquery-bxslider"
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
            this.render();
        },

        hide: function() {
            this.$el.css("height", 0);
            this.$el.css("width", 0);
        },

        show: function() {
            this.$el.css("height", "auto");
            this.$el.css("width", "auto");
        },
        
        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.$(".full-bxslider").bxSlider({
                auto: true	 ,
                  nextSelector: '#full-slider-next',
                  prevSelector: '#full-slider-prev',
            });
        }

    });

});
