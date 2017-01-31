import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

const Main = () => (
	<div>
		<div>hello webpack world</div>
		<Map />
	</div>
);

ReactDOM.render(<Main />, document.getElementById('main'));