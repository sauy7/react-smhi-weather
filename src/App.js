import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WrapRouters from './hoc/WrapRouters';
import Layout from './components/Layout/Layout'
import {setLocation} from './store/actions/index';

export class App extends Component {
  componentDidMount() {
    if ('geolocation' in navigator) { // geolocation supported
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude.toFixed(4);
        const lon = position.coords.longitude.toFixed(4);
        this.props.onChangeLocation(lat, lon);
      }, (/*error*/) => { // geolocation did not work
        this.props.onChangeLocation();
      }, { maximumAge: 120000, timeout: 10000 });
    } else { // geolocation not supported
      this.props.onChangeLocation();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <WrapRouters />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, { onChangeLocation: setLocation })(App);
