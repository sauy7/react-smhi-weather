import * as selectors from '../selectors';
import OSMAxios from '../../axios/OSMAxios';
import * as types from '../../constants/ActionTypes';

const fallback = {
  lat: 59.3345,
  lon: 18.0632,
  suburb: 'Stockholm',
  county: 'Failed to get current location'
};

const getLocation = (lat, lon) => {
  const params = { lat: lat, lon: lon, format: 'json' };

  return OSMAxios.get('/reverse', { params: params }).then(response => {
    const address = response.data.address;
    const suburb = address.city || address.municipality || address.suburb;
    return { lat: lat, lon: lon, suburb: suburb, county: address.county }
  }).catch((/*error*/) => {
    return { lat: lat, lon: lon, suburb: 'Unknown', county: [lat, lon].join(', ') }
  });
};

const currentLocation = (location) => {
  return (dispatch, getState) => {
    const locationId = [location.suburb, location.county].join('|');
    const favouriteLocations = selectors.getFavouriteLocations(getState());
    location.isFavourite = favouriteLocations.filter(loc => loc.id === locationId).length > 0;
    dispatch({
      type: types.SET_LOCATION,
      location: location
    });
  }
};

export const setLocation = (lat = fallback.lat, lon = fallback.lon) => {
  return dispatch => {
    return getLocation(lat, lon).then(
      location => dispatch(currentLocation(location)),
      (/*error*/) => dispatch(currentLocation(fallback))
    );
  };
};