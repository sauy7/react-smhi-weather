import produce from 'immer';
import * as types from '../../constants/ActionTypes';

/* Before we have any location from navigator.geolocation */
export const initialState = {
  locations: []
};

const reducer = produce(
  (draft, action) => {
    switch (action.type) {
      case types.ADD_LOCATION_SEARCH:
        draft.locations.push(action.location);
        return;
      default:
        return;
    }
  },
  initialState
);

export default reducer;