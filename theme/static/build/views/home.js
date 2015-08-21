define(["backbone","underscore","text!templates/home.html","../views/category","../views/skill","../collections/job"],function(e,t,i,s,n,o){return e.View.extend({template:t.template(i),selectSingleCategory:!1,categories:[],location:null,events:{"change #city":"refreshMap","change #address":"refreshMap"},initialize:function(){var e=this;app.collections.job=this.jobCollection=new o,this.render();var t=["City","Category","Skill"];t.forEach(function(t){var i=t.toLowerCase();app.promises[i+"Loaded"].done(function(){app.collections[i].forEach(function(i){e["add"+t](i)}),app.collections[i].forEach(function(i){e["add"+t](i)}),app.collections[i].on("add",e["add"+t],e)})})},refreshMap:function(){this.city=this.citySelect.find(":selected").text(),this.addressInput.val(this.city),app.collections.city.set({selected:!1}),app.collections.city.findWhere(this.citySelect.val()).set("selected",!0),setAddress(this.city,function(e){setMap(e)})},showHomeButtons:function(){this.homeButtons.removeClass("hidden")},hideHomeButtons:function(){this.homeButtons.addClass("hidden")},unselectAllCategories:function(e){var t=app.collections.category.where({selected:!0});t.each&&t.each(function(e){e.view.unselect()}),e&&e.view.select()},showSkillListContainer:function(){this.skillListContainer.removeClass("hidden")},hideSkillListContainer:function(){this.skillListContainer.addClass("hidden")},addCategory:function(e){e.view||(e.view=new s({model:e,parent:this})),this.categoryList.append(e.view.$el)},addSkill:function(e){e.view||(e.view=new n({model:e,parent:this})),this.skillList.append(e.view.$el)},addCity:function(e){this.citySelect.append('<option value="'+e.id+'">'+e.attributes.name+"</option>")},render:function(){this.html=$(this.template({categories:app.collections.category.models})),this.$el.html(this.html);var e=document.getElementById("address");e&&$(e).is(":visible")?setAddress(e.value,function(e){setMap(e)}):setMap(center),app.searchBox=new google.maps.places.SearchBox(e),app.searchBox.addListener("places_changed",function(){var e=app.searchBox.getPlaces();if(e&&0!=e.length){clearMarkers();var t=new google.maps.LatLngBounds;e.forEach(function(e){app.markers.push(getMarker(e.geometry.location,e.name)),e.geometry.viewport?t.union(e.geometry.viewport):t.extend(e.geometry.location)}),app.map.fitBounds(t)}}),this.postFilters=this.$("#postFilters"),this.categoryList=this.$el.find("#category-list"),this.skillListContainer=this.$el.find("#skill-list-container"),this.skillList=this.$el.find("#skill-list"),this.citySelect=this.$("#city"),this.addressInput=this.$("#address"),this.locationInput=this.$("#location"),this.homeButtons=this.$el.find("#home-buttons")}})});