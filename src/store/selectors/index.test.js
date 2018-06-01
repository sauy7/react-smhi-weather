import * as selectors from './index';

describe('location selectors', () => {
  const state = {
    location: {
      county: 'Järfälla',
      suburb: 'Jakobsberg',
      isFavourite: true
    },
    favourite: {
      locations: []
    }
  };

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

describe('favourite selectors', () => {
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

describe('start location selectors', () => {
  const state = {
    startLocation: {
      locationId: 'Jakobsberg|Järfälla'
    }
  };

  it('getStartLocation() returns state.startLocation.locationId', () => {
    expect(selectors.getStartLocation(state)).toEqual('Jakobsberg|Järfälla');
  });
});

describe('location searches selectors', () => {
  const state = {
    locationSearches: {
      locations: [
        { id: 'Jakobsberg, Järfälla', county: 'Järfälla', suburb: 'Jakobsberg' },
        { id: 'Stockholm, Stockholm kommun', county: 'Stockholm kommun',
          suburb: 'Stockholm'}
      ]
    }
  };

  it('getLocationSearches() returns state.locationSearches.locations', () => {
    expect(selectors.getLocationSearches(state)).toHaveLength(2);
  });
});