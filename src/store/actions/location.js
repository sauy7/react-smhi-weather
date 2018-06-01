import * as selectors from '../selectors';
import OSMAxios from '../../axios/OSMAxios';
import * as types from '../../constants/ActionTypes';
import history from '../../history';

const fallback = {
  lat: 59.3345,
  lon: 18.0632,
  suburb: 'Stockholm',
  county: 'Failed to get current location'
};

export const getLocation = (lat, lon) => {
  const params = { lat: lat, lon: lon, format: 'json' };

  return OSMAxios.get('/reverse', { params: params })
    .then((response) => {
      const address = response.data.address;
      const suburb = address.hamlet || address.village || address.town || address.city || address.municipality || address.suburb;
      return { lat: lat, lon: lon, suburb: suburb, county: address.county }
    })
    .catch((/*error*/) => {
      return { lat: lat, lon: lon, suburb: 'Unknown', county: [lat, lon].join(', ') }
    });
};

export const currentLocation = (location) => {
  return (dispatch, getState) => {
    let locationId;
    if (location.hasOwnProperty('id')) {
      locationId = location.id;
    } else {
      locationId = [location.suburb, location.county].join('|');
    }
    const favouriteLocations = selectors.getFavouriteLocations(getState());
    location.isFavourite = favouriteLocations.filter(loc => loc.id === locationId).length > 0;
    return dispatch(setLocation(location));
  }
};

const setLocation = (location) => {
  return {
    type: types.SET_LOCATION,
    location: location
  }
};

export const setCurrentLocation = (lat = fallback.lat, lon = fallback.lon) => {
  return dispatch => {
    return getLocation(lat, lon).then(location => dispatch(currentLocation(location)));
  };
};

export const getCurrentLocation = (lat, lon) => {
  return () => {
    return getLocation(lat, lon).then(location => location);
  }
};

export const setAndDisplayCurrentLocation = (location) => {
  return dispatch => {
    dispatch(currentLocation(location));
    if (history.location.pathname !== '/') {
      history.push('/');
    }
  };
};
