import OSMAxios from '../../axios/OSMAxios';
import * as types from '../../constants/ActionTypes';
import * as selectors from '../selectors/index';
import {getCurrentLocationId} from "../selectors/index";
import {getIsFavourite} from "../selectors/index";

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
  return {
    type: types.SET_LOCATION,
    location: location
  };
};

export const setLocation = (lat = fallback.lat, lon = fallback.lon) => {
  return dispatch => {
    return getLocation(lat, lon).then(
      location => dispatch(currentLocation(location)),
      (/*error*/) => dispatch(currentLocation(fallback))
    );
  };
};

const makeLocationFavourite = () => {
  return {
    type: types.MAKE_LOCATION_FAVOURITE
  }
};

const renounceLocationFavourite = () => {
  return {
    type: types.RENOUNCE_LOCATION_FAVOURITE
  }
};

const addFavouriteLocation = (id, suburb, county) => {
  return {
    type: types.ADD_FAVOURITE_LOCATION,
    location: {
      id: id,
      county: county,
      suburb: suburb
    }
  }
};

const removeFavouriteLocation = (id) => {
  return {
    type: types.REMOVE_FAVOURITE_LOCATION,
    id: id
  }
};

const updateFavouriteLocations = (suburb, county) => {
  const locationId = [suburb, county].join('|');
  return (dispatch, getState) => {
    const favouriteLocations = selectors.getFavouriteLocations(getState());
    if (favouriteLocations.filter(location => location.id === locationId).length > 0) {
      dispatch(removeFavouriteLocation(locationId));
    } else {
      dispatch(addFavouriteLocation(locationId, suburb, county));
    }
  }
};

export const toggleFavouriteLocation = () => {
  return (dispatch, getState) => {
    const suburb = selectors.getSuburb(getState());
    const county = selectors.getCounty(getState());
    if (!selectors.getIsFavourite(getState())) {
      Promise.all([
        dispatch(makeLocationFavourite()),
        dispatch(updateFavouriteLocations(suburb, county))
      ]);
    } else {
      Promise.all([
        dispatch(renounceLocationFavourite()),
        dispatch(updateFavouriteLocations(suburb, county))
      ]);
    }
  }
};

export const removeAndRenounceFavouriteLocation = (id) => {
  return (dispatch, getState) => {
    if (id === getCurrentLocationId(getState()) && getIsFavourite(getState())) {
      Promise.all([
        dispatch(removeFavouriteLocation(id)),
        dispatch(renounceLocationFavourite())
      ]);
    } else {
      dispatch(removeFavouriteLocation(id));
    }
  }
};