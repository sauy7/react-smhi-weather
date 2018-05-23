import produce from 'immer';
import * as types from '../../constants/ActionTypes';

export const initialState = {
  locations: []
};

const reducer = produce(
  (draft, action) => {
    switch (action.type) {
      case types.ADD_FAVOURITE_LOCATION:
        draft.locations.push(action.location);
        return;
      case types.REMOVE_FAVOURITE_LOCATION:
        draft.locations.splice(draft.locations.findIndex(location => location.id === action.id), 1);
        return;
      default:
        return;
    }
  },
  initialState
);

export default reducer;
