import {getLocationSearches} from '../selectors';
import * as types from '../../constants/ActionTypes';
import * as actions from './index';
import history from '../../history';

const addLocationSearch = (location) => {
  return {
    type: types.ADD_LOCATION_SEARCH,
    location: location
  };
};

export const addAndDisplaySearchLocation = (lat, lon) => {
  return (dispatch, getState) => {
    const searches = getLocationSearches(getState());
    const location = searches.find(search => search.lat.toFixed(3) === lat.toFixed(3) && search.lon.toFixed(3) === lon.toFixed(3));
    if (!location) {
      return actions.getLocation(lat,lon).then(location => {
        location.id = [location.suburb, location.county].join('|');
        location.lat = lat;
        location.lon = lon;
        if (searches.find(search => search.id === location.id)) {
          Promise.all([
            dispatch(actions.currentLocation(location))
          ]).then(() => {
            if (history.location.pathname !== '/') {
              history.push('/');
            }
          });
        } else {
          Promise.all([
            dispatch(actions.currentLocation(location)),
            dispatch(addLocationSearch(location))
          ]).then(() => {
            if (history.location.pathname !== '/') {
              history.push('/');
            }
          });
        }
      });
    } else {
      dispatch(actions.currentLocation(location));
      if (history.location.pathname !== '/') {
        history.push('/');
      }
    }
  }
};

export const displaySearchLocation = (locationId) => {
  return (dispatch, getState) => {
    const location = Object.assign({}, getLocationSearches(getState()).find(location => location.id === locationId));
    dispatch(actions.currentLocation(location));
    history.push('/');
  }
};
