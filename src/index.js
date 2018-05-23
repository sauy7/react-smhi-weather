import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import favouriteReducer from './store/reducers/favourite';
import locationReducer from './store/reducers/location';
import {Provider} from 'react-redux';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

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

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
