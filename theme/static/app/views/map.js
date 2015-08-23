define([
    "core/view",
    "underscore",
    "text!templates/map.html",
    'async!googlemaps'
], function(View, _, template) {

    return View.extend({

        template: _.template(template),
        
        markers: [],
        marker: new google.maps.LatLng(12.9141417, 74.85595680000006),
        geocoder:new google.maps.Geocoder(),
        icon: "/static/lib/images/marker.png",

        initialize: function() {
            app.events["centerChanged"] = new Event();
            this.render();
            app.events["centerChanged"].listeners.push(_.bind(this.refreshMap, this));
        },
        
        hide: function() {
            this.$el.addClass("hideMap");
        },

        show: function() {
            this.$el.removeClass("hideMap");
        },

        setMap: function(c) {
            clearMarkers();
            app.markers.push(getMarker(c));
            app.map.setCenter(c || center);
        },

        clearMarkers: function() {
            this.markers.forEach(function(marker) { marker.setMap(null); });
            this.markers = [];
        },

        setAddress: function(val, callback) {
            this.geocoder.geocode({'address': val}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var latLng = new google.maps.LatLng(lat, lng);
                    if (callback) callback(latLng);
                } else {
                    if (callback) callback();
                }
            });
        },

        getMarker: function(position, title) {
            var that = this;
            return new google.maps.Marker({
                map: that.map,
                draggable: true,
                position: position,
                title: title,
                icon: that.icon
            });
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
                    app.views["home"].view.citySelect.val(nearest_city.id);
                }
            });
        },

        getMapOptions: function() {
            return {
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: this.center,
                mapTypeControl: false,
                streetViewControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            };
        },

        render: function() {
            var that = this;

            this.html = $(this.template());
            this.$el.html(this.html);
            
            this.map = new google.maps.Map(document.getElementById("map-canvas"), this.getMapOptions());

            this.promise.resolve();

        }

    });

});
