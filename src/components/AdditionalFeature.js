import React from 'react';

const AdditionalFeature = (props) => {
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			{/* look at the AdditionalFeatures component, and calling the feature created in Feature.js */}
			<button className="button" onClick={() => props.addFeature(props.feature)}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
