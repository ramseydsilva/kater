define([
    "core/view",
    "underscore",
    "text!templates/location.html",
    'async!googlemaps'
], function(View, _, template) {

    return View.extend({

        template: _.template(template),

        events: {
            'change #city': 'refreshMap',
            'change #address': 'refreshMap'
        },

        initialize: function(options) {
            var that = this;
                
            this.render();

            app.promises["cityLoaded"].done(function() {
                app.collections.city.forEach(function(model) {
                    that.addCity(model);
                });
                app.collections.city.on("add", that.addCity, that);
            });

        },
        
        refreshMap: function(e) {
            var that = this;

            app.components.map.view.promise.done(function() {
                app.components.map.view.setAddress(input.value, function(center) {
                    app.components.map.view.setMap(center);
                });
            });

            this.city = this.citySelect.find(":selected").text();
            this.addressInput.val(this.city);
            app.collections.city.set({"selected": false});
            app.collections.city.findWhere(this.citySelect.val()).set("selected", true);
            setAddress(this.city, function(center) {
                setMap(center);
            });
        },

        addCity: function(model) {
            var that = this;
            this.promise.done(function() {
                that.citySelect.append('<option value="'+model.id+'">'+model.attributes.name+'</option>');
            });
        },

        render: function() {
            var that = this;
            
            this.html = $(this.template());
            this.$el.html(this.html);
            this.citySelect = this.$("#city");
            this.addressInput = this.$("#address");

            // Create the search box and link it to the UI element.
            this.searchBox = new google.maps.places.SearchBox(this.addressInput);

            this.searchBox.addListener('places_changed', function() {
                var places = that.searchBox.getPlaces();
                if (!places || places.length == 0) return;

                app.components.map.view.clearMarkers();

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
                app.components.map.view.map.fitBounds(bounds);
            });

            var mapView = app.components.map.view;
            app.components.map.promise.done(function() {
                mapView.promise.done(function() {
                    // Bias the SearchBox results towards current map's viewport.
                    mapView.map.addListener('bounds_changed', function() {
                        that.searchBox.setBounds(mapView.map.getBounds());
                    });

                    mapView.map.addListener('center_changed', function() {
                        var args = arguments;
                        //var that = this;
                        app.events["centerChanged"].listeners.forEach(function(listener) {
                            if (listener) listener.apply(that, args);
                        });
                    });
                });
            });

            this.promise.resolve();

        }

    });

});
