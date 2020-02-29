import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { dispatch } from 'rxjs/internal/observable/range';

import { addFeature, removeFeature } from './actions/Features';

const App = ({ additionalFeatures, car, additionalPrice, addFeature, removeFeature }) => {
	// const state = {
	// additionalPrice: 0,
	// car: {
	//   price: 26395,
	//   name: '2019 Ford Mustang',
	//   image:
	//     'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
	//   features: []
	// },
	// additionalFeatures: [
	//   { id: 1, name: 'V-6 engine', price: 1500 },
	//   { id: 2, name: 'Racing detail package', price: 1500 },
	//   { id: 3, name: 'Premium sound system', price: 500 },
	//   { id: 4, name: 'Rear spoiler', price: 250 }
	// ]
	// };

	// const removeFeature = item => {
	//   // dispatch an action here to remove an item
	//   dispatch({ type: 'REMOVE_FEATURE', payload: item.id})
	// };

	// const buyItem = item => {
	//   // dipsatch an action here to add an item
	//   dispatch({ type: 'BUY_ITEM', payload: item.price})
	// };

	return (
		<div className="boxes">
			<div className="box">
				<Header car={car} />
				<AddedFeatures car={car} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addFeature} />
				<Total car={car} additionalPrice={additionalPrice} />
			</div>
		</div>
	);
};

const mapDispatchToProps = { addFeature, removeFeature };

const mapStateToProps = (state) => {
	return {
		additionalPrice: state.additionalPrice,
		car: state.car,
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
