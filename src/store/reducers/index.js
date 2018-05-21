import produce from 'immer';
import * as types from '../../constants/ActionTypes';

/* Before we have any location from navigator.geolocation */
export const initialState = {
  location: {
    county: '',
    lat: null,
    lon: null,
    suburb: 'Loading location...'
  }
};

const rootReducer = produce(
  (draft, action) => {
    switch (action.type) {
      case types.SET_LOCATION:
        draft.location = action.location;
        return;
      default:
        return;
    }
  },
  initialState
);

export default rootReducer;