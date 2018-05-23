import reducer, {initialState} from './favourite';
import * as types from '../../constants/ActionTypes';

describe('favourite reducer', () => {
  const expected = {
    locations: [
      { county: 'Järfälla', id: 'Jakobsberg|Järfälla', suburb: 'Jakobsberg' }
    ]
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_FAVOURITE_LOCATION', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_FAVOURITE_LOCATION,
        location: expected.locations[0]
      })
    ).toEqual(expected);
  });

  it('handles REMOVE_FAVOURITE_LOCATION', () => {
    const initialFavourites = {
      locations: [
        { county: 'Stockholm kommun', id: 'Stockholm|Stockholm kommun', suburb: 'Stockholm' },
        { county: 'Järfälla', id: 'Jakobsberg|Järfälla', suburb: 'Jakobsberg' }
      ]
    };

    expect(
      reducer(initialFavourites, {
        type: types.REMOVE_FAVOURITE_LOCATION,
        id: 'Stockholm|Stockholm kommun'
      })
    ).toEqual(expected)
  });
});
