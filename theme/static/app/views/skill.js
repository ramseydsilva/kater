define([
    "backbone",
    "underscore",
    "text!templates/skill.html",
], function(Backbone, _, template) {

    return Backbone.View.extend({

        template: _.template(template),

        events: {
            "click": "toggle"
        },

        initialize: function(options) {
            var view = this;
            this.parent = options.parent;
            this.render();
        },
        
        toggle: function() {
            if (this.selected) {
                this.selected = false;
                this.model.attributes["selected"] = false;
                this.$el.removeClass("selected");
                this.$el.find("i").addClass("invisible");
            } else {
                this.selected = true;
                this.model.attributes["selected"] = true;
                this.$el.addClass("selected");
                this.$el.find("i").removeClass("invisible");
            }
        },

        select: function() {
            this.$el.removeClass("hidden");
            this.selected = true;
            this.toggle();
        },

        unselect: function() {
            this.$el.addClass("hidden");
            this.selected = false;
            this.toggle();
        },

        render: function() {
            this.html = $(this.template({
                skill: this.model
            }));
            this.$el.html(this.html).addClass("hidden");
        }

    });

});
