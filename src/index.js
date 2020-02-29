import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import { featureReducer } from './reducers/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

// make sure to create the store and pass in the reducer.
// Dont forget to wrap <App/>

const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
