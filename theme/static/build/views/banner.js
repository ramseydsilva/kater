define(["core/view","underscore","text!templates/banner.html","jquery-bxslider"],function(e,t,i){return e.extend({template:t.template(i),events:{},initialize:function(){this.render()},render:function(){this.html=$(this.template({})),this.$el.html(this.html),this.$(".bxslider").bxSlider({auto:!0,nextSelector:"#slider-next",prevSelector:"#slider-prev"})}})});