import rootReducer, {initialState} from './index';
import * as types from '../../constants/ActionTypes';

describe('rootReducer', () => {
  const expected = {
    county: 'Järfälla', lat: 12, lon: 11, suburb: 'Jakobsberg'
  };

  it('returns the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it('handles SET_LOCATION', () => {
    expect(
      rootReducer({}, {
        type: types.SET_LOCATION,
        location: expected
      })
    ).toEqual({ location: expected });
  });
});
