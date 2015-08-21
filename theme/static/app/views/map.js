define([
    "backbone",
    "underscore",
    "text!templates/map.html",
    'async!googlemaps'
], function(Backbone, _, template) {

    var listening = false,
        run = true,
        icon = "/static/lib/images/marker.png",
        marker,
        geocoder = new google.maps.Geocoder();
    app.markers = [];
    center = new google.maps.LatLng(12.9141417, 74.85595680000006);

    var getMarker = function(position, title) {
        return new google.maps.Marker({
            map: app.map,
            draggable: true,
            position: position,
            title: title,
            icon: icon
        });
    }

    setMap = function(c) {
        clearMarkers();
        app.markers.push(getMarker(c));
        app.map.setCenter(c || center);
    };

    clearMarkers = function() {
        app.markers.forEach(function(marker) { marker.setMap(null); });
        app.markers = [];
    };

    setAddress = function(val, callback) {
        geocoder.geocode({'address': val}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                var latLng = new google.maps.LatLng(lat, lng);
                if (callback) callback(latLng);
            } else {
                if (callback) callback();
            }
        });
    };

    var getMapOptions = function(center) {
        return {
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            }
        };
    }


    return Backbone.View.extend({

        template: _.template(template),

        initialize: function() {
            app.events["centerChanged"] = new Event();
            this.render();
            app.events["centerChanged"].listeners.push(_.bind(this.refreshMap, this));
        },
        
        refreshMap: function(e) {
            var place = app.map.getCenter();
            if (!place) return;
            $.ajax({
                url: "/api/cities/get_nearest_city/",
                method: "GET",
                data: {latitude: place.K, longitude: place.G},
                success: function(nearest_city, response, options) {
                    nearest_city && app.collections["city"].add(nearest_city);
                    app.views["home"].citySelect.val(nearest_city.id);
                }
            });
        },

        render: function() {
            this.html = $(this.template({
            }));
            this.$el.html(this.html);
            this.renderMap();
        },

        renderMap: function() {

            app.map = new google.maps.Map(document.getElementById("map-canvas"), getMapOptions());

            // Bias the SearchBox results towards current map's viewport.
            app.map.addListener('bounds_changed', function() {
                app.searchBox.setBounds(app.map.getBounds());
            });

            app.map.addListener('center_changed', function() {
                var args = arguments;
                var that = this;
                app.events["centerChanged"].listeners.forEach(function(listener) {
                    if (listener) listener.apply(that, args);
                });
            });

            app.promises.mapLoaded.resolve();

        }

    });

});
