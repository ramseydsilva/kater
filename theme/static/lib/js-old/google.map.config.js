(function($){
	$(document).ready(function(){

		// Create an array of styles.
		var styles = [
		{
			"elementType": "geometry",
			"stylers": [
			  { "hue": "#00aaff" }
			]
			}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,
		  {name: "Styled Map"});

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
            var input = document.getElementById('pac-input');

			function initialize() {
                // Set the coordinates of your location
                geocoder = new google.maps.Geocoder();

                geocoder.geocode({'address': input.value}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var lat = results[0].geometry.location.lat();
                        var lng = results[0].geometry.location.lng();
                        myLatlng = new google.maps.LatLng(lat, lng);
                        var mapOptions = {
                            zoom: 13,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            center: myLatlng,
                            mapTypeControl: false,
                            streetViewControl: false,
                            zoomControlOptions: {
                                position: google.maps.ControlPosition.LEFT_TOP
                            }
                        };

                        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

                        // Create the search box and link it to the UI element.
                        var searchBox = new google.maps.places.SearchBox(input);
                        var icon = document.getElementById("map-canvas").attributes.marker.value;

                        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

                        // Bias the SearchBox results towards current map's viewport.
                        map.addListener('bounds_changed', function() {
                            searchBox.setBounds(map.getBounds());
                        });

                        marker = new google.maps.Marker({
                            map: map,
                            draggable: true,
                            animation: google.maps.Animation.DROP,
                            position: myLatlng,
                            icon: icon
                        });
                        google.maps.event.addDomListener(window, "resize", function() {
                            map.setCenter(myLatlng);
                        });

                        var markers = [];
                        // [START region_getplaces]
                        // Listen for the event fired when the user selects a prediction and retrieve
                        // more details for that place.
                        searchBox.addListener('places_changed', function() {
                            var places = searchBox.getPlaces();

                            if (places.length == 0) {
                                return;
                            }

                            // Clear out the old markers.
                            markers.forEach(function(marker) {
                              marker.setMap(null);
                            });
                            markers = [];

                            // For each place, get the icon, name and location.
                            var bounds = new google.maps.LatLngBounds();
                            places.forEach(function(place) {

                            // Create a marker for each place.
                            markers.push(new google.maps.Marker({
                                map: map,
                                icon: icon,
                                title: place.name,
                                position: place.geometry.location,
                                draggable: true
                              }));

                              if (place.geometry.viewport) {
                                // Only geocodes have viewport.
                                bounds.union(place.geometry.viewport);
                              } else {
                                bounds.extend(place.geometry.location);
                              }
                            });
                            map.fitBounds(bounds);
                        });

                        map.mapTypes.set('map_style', styledMap);
                        map.setMapTypeId('map_style');

                    } else {
                        //$('#map-canvas').hide();
                    }
                });
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);
