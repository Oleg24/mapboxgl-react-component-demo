import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZzI0IiwiYSI6ImNpcnFrdW9yeTBoNHdmZm02NGpqbGNzeWUifQ.aXv5-SoMxLKxdHIpbjBqIg';

class Map extends React.Component {

	componentDidMount() {
		/* On first load - center on a location */
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v9',
			center: ["-121.499104", "38.579791"],
			zoom: 11
		});


		/* on initial load setup the headquarter location + icon */
		map.on('load', function () {
			const firstLocation = ["-121.499104", "38.579791"];
			const el = document.createElement('div');
			el.className = 'marker';
			el.style.backgroundImage = 'url(./assets/images/happy-smiley.png)';
			el.style.width = '48px';
			el.style.height = '48px';
			new mapboxgl.Marker(el)
				.setLngLat(firstLocation)
				.addTo(map);
		});

		window.setTimeout(function () {
			const newLocation = ["-77.036530", "38.897577"];
			map.flyTo({
				center: newLocation,
				zoom: 11
			});
			const el = document.createElement('div');
			el.className = 'marker';
			el.style.backgroundImage = 'url(./assets/images/sad-face.png)';
			el.style.width = '48px';
			el.style.height = '48px';
			new mapboxgl.Marker(el)
				.setLngLat(newLocation)
				.addTo(map);

		}, 3000)
	}

	render() {
		return (<div>
			<div id="map" style={{height:400, width: 600}}></div>
		</div>);
	}
}
export default Map;


