import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import favouriteReducer from './store/reducers/favourite';
import locationReducer from './store/reducers/location';
import {Provider} from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  },
  custom: {
    families: ['weathericons'],
    urls: ['https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css']
  }
});

const rootReducer = combineReducers({
  location: locationReducer,
  favourite: favouriteReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
