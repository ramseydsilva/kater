define(["backbone","handlebars","underscore","jquery","text!../templates/modal.html","bootstrap"],function(e,t,o,n,i){var s=0,d=e.View.extend({template:t.compile(i),el:n("#modal"),events:{"shown.bs.modal":"onShow"},initialize:function(e){this.defaults={title:"Title",body:"",modal:{}},o.extend(this.defaults,e),this.onHideExtra=e.onHide,this.onShowExtra=e.onShow,this.returnFocusTo=document.activeElement,this.render()},onHide:function(){this.onHideExtra&&this.onHideExtra(),this.returnFocusTo.focus();var e=n(".modal-backdrop");e.length&&e.remove(),this.$el.off("hidden.bs.modal")},adjustZIndex:function(){s?this.$el.css("z-index",s):s=parseInt(this.$el.css("z-index")),s+=1},onShow:function(){var e=this;this.onShowExtra&&this.onShowExtra();var t=n(".modal-backdrop");t.length||n("body").append('<div class="modal-backdrop fade in"></div>'),this.$el.off("shown.bs.modal"),this.$el.on("hidden.bs.modal",function(){e.onHide()}),this.$el.show()},render:function(){this.rendered=this.template(this.defaults),this.$el.html(this.rendered),this.adjustZIndex(),this.$el.modal(this.defaults.modal)},close:function(){this.undelegateEvents(),this.$el.modal("hide")}});return d});