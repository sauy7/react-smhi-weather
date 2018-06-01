import reducer, {initialState} from './location';
import * as types from '../../constants/ActionTypes';

describe('location reducer', () => {
  const expected = {
    county: 'Järfälla', lat: 12, lon: 11, suburb: 'Jakobsberg'
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SET_LOCATION with location', () => {
    expect(
      reducer({}, {
        type: types.SET_LOCATION,
        location: expected
      })
    ).toEqual(expected);
  });

  it('handles MAKE_LOCATION_FAVOURITE', () => {
    const state = {
      isFavourite: false
    };
    const expected = {
      isFavourite: true
    };
    expect(
      reducer(state, { type: types.MAKE_LOCATION_FAVOURITE })
    ).toEqual(expected);
  });

  it('handles RENOUNCE_LOCATION_FAVOURITE', () => {
    const state = {
      isFavourite: true
    };
    const expected = {
      isFavourite: false
    };
    expect(
      reducer(state, { type: types.RENOUNCE_LOCATION_FAVOURITE })
    ).toEqual(expected);
  });
});
