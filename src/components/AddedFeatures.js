import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
	return (
		<div className="content">
			<h6>Added features:</h6>
			{props.car.features.length ? (
				<ol type="1">
					{/* Need to pass in removeFeature as a prop so we are able use it in our AddedFeautre component to remove it */}
					{props.car.features.map((item) => (
						<AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

export default AddedFeatures;
