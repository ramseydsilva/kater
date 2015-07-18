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

			function initialize() {
                // Set the coordinates of your location
                geocoder = new google.maps.Geocoder();

                geocoder.geocode({'address': $('#map-canvas').attr("address")}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var lat = results[0].geometry.location.lat();
                        var lng = results[0].geometry.location.lng();
                        myLatlng = new google.maps.LatLng(lat, lng);
                        myZoom = 15;

                        var mapOptions = {
                            zoom: myZoom,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            center: myLatlng,
                            scrollwheel: false
                        };
                        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
                        marker = new google.maps.Marker({
                            map:map,
                            draggable:true,
                            animation: google.maps.Animation.DROP,
                            position: myLatlng,
                            icon: document.getElementById("map-canvas").attributes.marker.value
                        });
                        google.maps.event.addDomListener(window, "resize", function() {
                            map.setCenter(myLatlng);
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
