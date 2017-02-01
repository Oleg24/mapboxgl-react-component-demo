import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

const Main = () => (
	<div>
		<h3>Webpack React Mapbox Demo</h3>
		<Map />
	</div>
);

ReactDOM.render(<Main />, document.getElementById('main'));