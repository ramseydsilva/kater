define([
    "core/view",
    "underscore",
    "text!templates/category.html",
], function(View, _, template) {

    return View.extend({
        
        template: _.template(template),

        events: {
            "click": "toggle"
        },

        initialize: function(options) {
            var view = this;
            this.parent = options.parent;
            this.render();
        },
        
        select: function() {
            this.selected = true;
            this.model.attributes["selected"] = true;
            this.$el.addClass("selected");
            this.$el.find("i").removeClass("invisible");
            this.model.skills.forEach(function(skill){
               skill.view.select(); 
            });
        },

        unselect: function() {
            this.selected = false;
            this.model.attributes["selected"] = false;
            this.$el.removeClass("selected");
            this.$el.find("i").addClass("invisible");
            this.model.skills.forEach(function(skill){
               skill.view.unselect(); 
            });
        },

        toggle: function() {
            if (this.selected) {
                this.unselect();
            } else {
                if (this.parent.selectSingleCategory) {
                    this.parent.unselectAllCategories();
                }
                this.select();
            }
            if(this.model.collection.where({selected: true}).length) {
                this.parent.showSkillListContainer();
            } else {
                this.parent.hideSkillListContainer();
            }

        },

        render: function() {
            this.html = $(this.template({
                category: this.model
            }));
            this.$el.html(this.html);
        }

    });

});
