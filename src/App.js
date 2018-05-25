import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WrapRouters from './hoc/WrapRouters';
import Layout from './components/Layout/Layout'
import {setLocation} from './store/actions/index';
import {getFavouriteLocations, getStartLocation} from "./store/selectors";

export class App extends Component {
  componentDidMount() {
    if (this.props.startLocation) { // use stored startLocation
      const location = this.props.favouriteLocations.find(
        location => location.id === this.props.startLocation
      );
      this.props.onChangeLocation(location.lat, location.lon);
    } else {
      if ('geolocation' in navigator) { // geolocation supported
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.props.onChangeLocation(lat, lon);
        }, (/*error*/) => { // geolocation did not work
          this.props.onChangeLocation();
        }, { maximumAge: 120000, timeout: 10000 });
      } else { // geolocation not supported
        this.props.onChangeLocation();
      }
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

export default connect((state) => ({
  startLocation: getStartLocation(state),
  favouriteLocations: getFavouriteLocations(state)
}), {
  onChangeLocation: setLocation
})(App);
