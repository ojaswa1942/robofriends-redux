import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


const rootReducer =combineReducers({searchRobots,requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
