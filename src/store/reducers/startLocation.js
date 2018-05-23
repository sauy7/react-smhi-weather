import produce from 'immer';
import * as types from '../../constants/ActionTypes';

/* Before we have any location from navigator.geolocation */
export const initialState = {
  locationId: null
};

const reducer = produce(
  (draft, action) => {
    switch (action.type) {
      case types.SET_START_LOCATION:
        draft.locationId = action.locationId;
        return;
      case types.RESET_START_LOCATION:
        draft.locationId = null;
        return;
      default:
        return;
    }
  },
  initialState
);

export default reducer;