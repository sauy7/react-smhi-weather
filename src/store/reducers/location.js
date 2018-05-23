import produce from 'immer';
import * as types from '../../constants/ActionTypes';

/* Before we have any location from navigator.geolocation */
export const initialState = {
  county: '',
  isFavourite: false,
  lat: null,
  lon: null,
  suburb: 'Loading location...'
};

const reducer = produce(
  (draft, action) => {
    switch (action.type) {
      case types.SET_LOCATION:
        draft.county = action.location.county;
        draft.lat = action.location.lat;
        draft.lon = action.location.lon;
        draft.suburb = action.location.suburb;
        return;
      case types.MAKE_LOCATION_FAVOURITE:
        draft.isFavourite = true;
        return;
      case types.RENOUNCE_LOCATION_FAVOURITE:
        draft.isFavourite = false;
        return;
      default:
        return;
    }
  },
  initialState
);

export default reducer;