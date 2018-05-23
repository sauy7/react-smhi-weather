import reducer, {initialState} from './startLocation';
import * as types from '../../constants/ActionTypes';

describe('start location reducer', () => {
  const expected = {
    locationId: 'Jakobsberg|Järfälla'
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SET_START_LOCATION', () => {
    expect(
      reducer({}, {
        type: types.SET_START_LOCATION,
        locationId: 'Jakobsberg|Järfälla'
      })
    ).toEqual(expected);
  });

  it('handles RESET_START_LOCATION', () => {
    expect(
      reducer({ locationId: 'Jakobsberg|Järfälla'}, {
        type: types.RESET_START_LOCATION
      })
    ).toEqual({ locationId: null });
  });
});
