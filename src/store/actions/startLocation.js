import * as types from '../../constants/ActionTypes';

export const setStartLocation = (id) => {
  return {
    type: types.SET_START_LOCATION,
    locationId: id
  }
};

export const resetStartLocation = () => {
  return {
    type: types.RESET_START_LOCATION
  }
};
