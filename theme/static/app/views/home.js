define([
    "core/view",
    "underscore",
    "text!templates/home.html",
    "../views/category",
    "../views/skill"
], function(View, _, template, CategoryView, SkillView) {

    return View.extend({

        template: _.template(template),
        selectSingleCategory: false,
        categories: [],

        events: {

        },

        initialize: function(options) {
            var view = this,
                models = ['Category', 'Skill'];
                
            this.render();
            models.forEach(function(model_name) {
                var lower_name = model_name.toLowerCase();
                app.promises[lower_name+"Loaded"].done(function() {
                    app.collections[lower_name].forEach(function(model) {
                        view["add"+model_name](model);
                    });
                    app.collections[lower_name].on("add", view["add"+model_name], view);
                });
            })
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
            var that = this;
            this.promise.done(function() {
                that.categoryList.append(model.view.$el);
            });
        },

        addSkill: function(model) {
            if (!model.view) {
                model.view = new SkillView({
                    model: model,
                    parent: this
                });
            }
            var that = this;
            this.promise.done(function() {
                that.skillList.append(model.view.$el);
            });
        },

        render: function() {
            var that = this;
            this.html = $(this.template({
                "categories": app.collections.category.models
            }));
            this.$el.html(this.html);

            app.promises.mapLoaded.done(function() {
            
                var input = document.getElementById('address');
                if (input && $(input).is(":visible")) {
                    setAddress(input.value, function(center) {
                        setMap(center);
                    });
                } else {
                    app.promises.mapLoaded.done(function() {
                        setMap(center);
                    });
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

                // Bias the SearchBox results towards current map's viewport.
                this.map.addListener('bounds_changed', function() {
                    app.views.home.view.promise.done(function() {
                        app.searchBox.setBounds(app.map.getBounds());
                    })
                });

                this.map.addListener('center_changed', function() {
                    var args = arguments;
                    //var that = this;
                    app.events["centerChanged"].listeners.forEach(function(listener) {
                        if (listener) listener.apply(that, args);
                    });
                });
            
                that.promise.resolved();

            });

            this.postFilters = this.$("#postFilters")
            this.categoryList = this.$el.find("#category-list");
            this.skillListContainer = this.$el.find("#skill-list-container");
            this.skillList = this.$el.find("#skill-list");
            this.homeButtons = this.$el.find("#home-buttons");
        }

    });

});
