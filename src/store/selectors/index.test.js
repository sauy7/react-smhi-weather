import * as selectors from './index';

describe('Location selectors', () => {
  const state = { location: { county: 'Järfälla', suburb: 'Jakobsberg' } };

  it('getCounty() returns state.location.county', () => {
    expect(selectors.getCounty(state)).toBe('Järfälla');
  });

  it('getSuburb() returns state.location.suburb', () => {
    expect(selectors.getSuburb(state)).toBe('Jakobsberg');
  });
});
