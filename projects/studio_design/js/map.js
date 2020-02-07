mapboxgl.accessToken = 'pk.eyJ1IjoiMjNkamFrIiwiYSI6ImNqM2c5c21uMTAwMWQzMm52NWw1OGYwYnkifQ.V6WD6jF1oPfHRsttU0g5kQ';
var map = new mapboxgl.Map({
	style: 'mapbox://styles/mapbox/light-v9',
	center: [36.2310, 50.0040],
	zoom: 15.25,
	pitch: 250,
	bearing: 170,
	container: 'map'
});
map.on('load', function () {
	map.addLayer({
		'id': '3d-buildings',
		'source': 'composite',
		'source-layer': 'building',
		'filter': ['==', 'extrude', 'true'],
		'type': 'fill-extrusion',
		'minzoom': 15,
		'paint': {
			'fill-extrusion-color': '#aaa',
			'fill-extrusion-height': {
				'type': 'identity',
				'property': 'height'
			},
			'fill-extrusion-base': {
				'type': 'identity',
				'property': 'min_height'
			},
			'fill-extrusion-opacity': .6
		}
	});
});