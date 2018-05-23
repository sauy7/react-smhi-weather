import * as selectors from '../selectors';
import {getCurrentLocationId} from '../selectors';
import * as types from '../../constants/ActionTypes';
import {getIsFavourite} from '../selectors';

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

const addFavouriteLocation = (id, suburb, county, latitude, longitude) => {
  return {
    type: types.ADD_FAVOURITE_LOCATION,
    location: {
      id: id,
      county: county,
      suburb: suburb,
      lat: latitude,
      lon: longitude
    }
  }
};

const removeFavouriteLocation = (id) => {
  return {
    type: types.REMOVE_FAVOURITE_LOCATION,
    id: id
  }
};

const updateFavouriteLocations = (suburb, county, latitude, longitude) => {
  const locationId = [suburb, county].join('|');
  return (dispatch, getState) => {
    const favouriteLocations = selectors.getFavouriteLocations(getState());
    if (favouriteLocations.filter(location => location.id === locationId).length > 0) {
      dispatch(removeFavouriteLocation(locationId));
    } else {
      dispatch(addFavouriteLocation(locationId, suburb, county, latitude, longitude));
    }
  }
};

export const toggleFavouriteLocation = () => {
  return (dispatch, getState) => {
    const suburb = selectors.getSuburb(getState());
    const county = selectors.getCounty(getState());
    const latitude = selectors.getLatitude(getState());
    const longitude = selectors.getLongitude(getState());
    let actions =[dispatch(updateFavouriteLocations(suburb, county, latitude, longitude))];
    if (!selectors.getIsFavourite(getState())) {
      actions.push(dispatch(makeLocationFavourite()))
    } else {
      actions.push(dispatch(renounceLocationFavourite()));
    }
    Promise.all(actions);
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