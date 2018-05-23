import * as selectors from './index';

describe('Location selectors', () => {
  const state = { location: { county: 'Järfälla', suburb: 'Jakobsberg', isFavourite: true } };

  it('getCounty() returns state.location.county', () => {
    expect(selectors.getCounty(state)).toBe('Järfälla');
  });

  it('getSuburb() returns state.location.suburb', () => {
    expect(selectors.getSuburb(state)).toBe('Jakobsberg');
  });

  it('getIsFavourite() returns state.location.isFavourite', () => {
    expect(selectors.getIsFavourite(state)).toBe(true);
  })
});

describe('Favourite selectors', () => {
  const state = {
    favourite: {
      locations: [
        { id: 'Jakobsberg, Järfälla', county: 'Järfälla', suburb: 'Jakobsberg' },
        { id: 'Stockholm, Stockholm kommun', county: 'Stockholm kommun',
          suburb: 'Stockholm'}
      ]
    }
  };

  it('getFavouriteLocations() returns state.favourite.locations', () => {
    expect(selectors.getFavouriteLocations(state)).toHaveLength(2);
  });
});