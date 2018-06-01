import reducer, {initialState} from './locationSearches';
import * as types from '../../constants/ActionTypes';

describe('savedLocationSearches reducer', () => {
  const expected = {
    locations: [
      { county: 'Järfälla', id: 'Jakobsberg|Järfälla', suburb: 'Jakobsberg' }
    ]
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_LOCATION_SEARCH', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_LOCATION_SEARCH,
        location: expected.locations[0]
      })
    ).toEqual(expected);
  });

  /*it('handles REMOVE_LOCATION_SEARCH', () => {
    const initialFavourites = {
      locations: [
        { county: 'Stockholm kommun', id: 'Stockholm|Stockholm kommun', suburb: 'Stockholm' },
        { county: 'Järfälla', id: 'Jakobsberg|Järfälla', suburb: 'Jakobsberg' }
      ]
    };

    expect(
      reducer(initialFavourites, {
        type: types.REMOVE_LOCATION_SEARCH,
        id: 'Stockholm|Stockholm kommun'
      })
    ).toEqual(expected)
  });*/
});
