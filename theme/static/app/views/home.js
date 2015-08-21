define([
    "backbone",
    "underscore",
    "text!templates/home.html",
    "../views/category",
    "../views/skill",
    "../collections/job"
], function(Backbone, _, template, CategoryView, SkillView, JobCollection) {

    var listening = false,
        run = true;

    return Backbone.View.extend({

        template: _.template(template),
        selectSingleCategory: false,
        categories: [],
        location: null,

        events: {
            'change #city': 'refreshMap',
            'change #address': 'refreshMap'
        },

        initialize: function(options) {
            var view = this;

            app.collections['job'] = this.jobCollection = new JobCollection();
            
            this.categoryCollection = options.categoryCollection;
            this.skillCollection = options.skillCollection;
            this.cityCollection = options.cityCollection;

            this.render();
            
            var models = ['City', 'Category', 'Skill'];
            models.forEach(function(model_name) {
                var lower_name = model_name.toLowerCase();
                app.promises[lower_name+"Loaded"].done(function() {
                    app.collections[lower_name].forEach(function(model) {
                        view["add"+model_name](model);
                    });
                    app.collections["category"].on("add", view["add"+model_name], view);
                });
            })
        },
        
        refreshMap: function(e) {
            this.city = this.citySelect.find(":selected").text();
            this.addressInput.val(this.city);
            app.collections.city.set({"selected": false});
            app.collections.city.findWhere(this.citySelect.val()).set("selected", true);
            setAddress(this.city, function(center) {
                setMap(center);
            });
        },

        showHomeButtons: function() {
            this.homeButtons.removeClass("hidden");
        },

        hideHomeButtons: function() {
            this.homeButtons.addClass("hidden");
        },

        unselectAllCategories: function(selectCategory) {
            var selected = app.collections.category.where({selected: true});
            selected.each && selected.each(function(selectedCat){
                selectedCat.view.unselect();
            });
            if (selectCategory) selectCategory.view.select();
        },

        showSkillListContainer: function() {
            this.skillListContainer.removeClass("hidden");
        },

        hideSkillListContainer: function() {
            this.skillListContainer.addClass("hidden");
        },
        
        addCategory: function(model) {
            if (!model.view) {
                model.view = new CategoryView({
                    model: model,
                    parent: this
                });
            }
            this.categoryList.append(model.view.$el);
        },

        addSkill: function(model) {
            if (!model.view) {
                model.view = new SkillView({
                    model: model,
                    parent: this
                });
            }
            this.skillList.append(model.view.$el);
        },
        
        addCity: function(model) {
            this.citySelect.append('<option value="'+model.id+'">'+model.attributes.name+'</option>');
        },

        render: function() {
            var view = this;
            this.html = $(this.template({
                "categories": app.collections.category.models
            }));
            this.$el.html(this.html);
            
            var input = document.getElementById('address');
            if (input && $(input).is(":visible")) {
                setAddress(input.value, function(center) {
                    setMap(center);
                });
            } else {
               setMap(center); 
            }

            // Create the search box and link it to the UI element.
            app.searchBox = new google.maps.places.SearchBox(input);

            app.searchBox.addListener('places_changed', function() {
                var places = app.searchBox.getPlaces();
                if (!places || places.length == 0) return;

                clearMarkers();

                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    app.markers.push(getMarker(place.geometry.location, place.name))
                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                app.map.fitBounds(bounds);
            });
    
            this.postFilters = this.$("#postFilters")
            this.categoryList = this.$el.find("#category-list");
            this.skillListContainer = this.$el.find("#skill-list-container");
            this.skillList = this.$el.find("#skill-list");
            this.citySelect = this.$("#city");
            this.addressInput = this.$("#address");
            this.locationInput = this.$('#location');
            this.homeButtons = this.$el.find("#home-buttons");
        }

    });

});
