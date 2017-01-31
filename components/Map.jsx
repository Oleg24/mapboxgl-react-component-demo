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
			map.addLayer({
				"id": "symbols",
				"type": "symbol",
				"source": {
					"type": "geojson",
					"data": {
						"type": "FeatureCollection",
						"features": [
							{
								"type": "Feature",
								"properties": {
									"icon": "castle-15"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [
										-121.499104,
										38.579791

									]
								}
							}
						]
					}
				},
				"paint": {}
			});
		});
	}

	render() {
		return (<div>
			<div id="map" style={{height:400, width: 600}}></div>
		</div>);
	}
}
export default Map;


