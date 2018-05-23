import reducer, {initialState} from './location';
import * as types from '../../constants/ActionTypes';

describe('location reducer', () => {
  const expected = {
    county: 'Järfälla', lat: 12, lon: 11, suburb: 'Jakobsberg'
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SET_LOCATION', () => {
    expect(
      reducer({}, {
        type: types.SET_LOCATION,
        location: expected
      })
    ).toEqual(expected);
  });
});
