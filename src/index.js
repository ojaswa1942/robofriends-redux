import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {searchRobots} from './reducers';
import {createLogger} from 'redux-logger'
import './index.css';
import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(searchRobots, applyMiddleware(createLogger()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
