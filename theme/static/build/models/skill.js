define(["backbone"],function(t){return t.Model.extend({initialize:function(){this.category=app.collections.category.findWhere({id:this.attributes.parent}),this.category.skills.push(this)}})});