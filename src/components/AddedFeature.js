import React from 'react';

const AddedFeature = (props) => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			{/* look at the AddedFeatures component, and calling the feature created in Feature.js */}
			<button className="button" onClick={() => props.removeFeature(props.feature)}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
