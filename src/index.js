import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
