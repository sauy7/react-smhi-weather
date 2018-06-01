import * as selectors from '../selectors';
import * as types from '../../constants/ActionTypes';

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

const addFavouriteLocation = (location) => {
  return {
    type: types.ADD_FAVOURITE_LOCATION,
    location: location
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
      const location = {
        county: county,
        id: locationId,
        lat: latitude,
        lon: longitude,
        suburb: suburb
      };
      dispatch(addFavouriteLocation(location));
    }
  }
};

export const toggleFavouriteLocation = () => {
  return (dispatch, getState) => {
    const suburb = selectors.getSuburb(getState());
    const county = selectors.getCounty(getState());
    const latitude = selectors.getLatitude(getState());
    const longitude = selectors.getLongitude(getState());
    let actions = [dispatch(updateFavouriteLocations(suburb, county, latitude, longitude))];
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
    if (id === selectors.getCurrentLocationId(getState()) && selectors.getIsFavourite(getState())) {
      Promise.all([
        dispatch(removeFavouriteLocation(id)),
        dispatch(renounceLocationFavourite())
      ]);
    } else {
      dispatch(removeFavouriteLocation(id));
    }
  }
};