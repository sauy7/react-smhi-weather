import * as actions from './startLocation';
import * as types from '../../constants/ActionTypes';


describe('setStartLocation()', () => {
  it('dispatches SET_START_LOCATION', () => {
    const locationId = 'Jakobsberg|Järfälla';
    const expectedAction = {
      type: types.SET_START_LOCATION,
      locationId: locationId
    };
    expect(actions.setStartLocation(locationId)).toEqual(expectedAction);
  });

  it('dispatches RESET_START_LOCATION', () => {
    const expectedAction = {
      type: types.RESET_START_LOCATION
    };
    expect(actions.resetStartLocation()).toEqual(expectedAction);
  });
});
