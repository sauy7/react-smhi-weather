import MockAdapter from 'axios-mock-adapter';
import OSMAxios from '../../axios/OSMAxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './locationSearches';
import * as types from '../../constants/ActionTypes';
import history from '../../history';

const mockStore = configureStore([thunk]);

describe('addAndDisplaySearchLocation()', () => {
  let mockAxios;
  const jakobsberg = {
    county: 'Järfälla',
    id: 'Jakobsberg|Järfälla',
    isFavourite: false,
    lat: 59.4308,
    lon: 17.8214,
    suburb: 'Jakobsberg'
  };

  beforeEach(() => {
    mockAxios = new MockAdapter(OSMAxios);
    if (history.location.pathname !== '/search') {
      history.push('/search');
    }
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('dispatches ADD_LOCATION_SEARCH and SET_LOCATION for new location search', () => {
    const initialState = {
      locationSearches: {
        locations: []
      },
      favourite: {
        locations: []
      }
    };
    mockAxios
      .onGet('/reverse', { params: { lat: jakobsberg.lat, lon: jakobsberg.lon, format: 'json'} })
      .reply(200, {
        address: { suburb: 'Jakobsberg', county: 'Järfälla' }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: jakobsberg },
      { type: types.ADD_LOCATION_SEARCH, location: jakobsberg }
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.addAndDisplaySearchLocation(jakobsberg.lat, jakobsberg.lon)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SET_LOCATION for an existing location search, complete match', () => {
    const initialState = {
      locationSearches: {
        locations: [ jakobsberg ]
      },
      favourite: {
        locations: []
      }
    };
    mockAxios
      .onGet('/reverse', { params: { lat: jakobsberg.lat, lon: jakobsberg.lon, format: 'json'} })
      .reply(200, {
        address: { suburb: 'Jakobsberg', county: 'Järfälla' }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: jakobsberg }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.addAndDisplaySearchLocation(jakobsberg.lat, jakobsberg.lon));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches SET_LOCATION for location with mis-matching coords but matching id', () => {
    const initialState = {
      locationSearches: {
        locations: [ jakobsberg ]
      },
      favourite: {
        locations: []
      }
    };
    const jakobsberg_alt = {
      county: 'Järfälla',
      id: 'Jakobsberg|Järfälla',
      isFavourite: false,
      lat: 60.4308, // different to jakobsberg
      lon: 18.8214, // different to jakobsberg
      suburb: 'Jakobsberg'
    };
    mockAxios
      .onGet('/reverse', { params: { lat: jakobsberg_alt.lat, lon: jakobsberg_alt.lon, format: 'json'} })
      .reply(200, {
        address: { suburb: 'Jakobsberg', county: 'Järfälla' }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: jakobsberg_alt }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.addAndDisplaySearchLocation(jakobsberg_alt.lat, jakobsberg_alt.lon)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('displaySearchLocation()', () => {
  const initialState = {
    favourite: {
      locations: []
    },
    locationSearches: {
      locations: [
        {
          county: 'Järfälla',
          id: 'Jakobsberg|Järfälla',
          isFavourite: false,
          lat: 59.4307,
          lon: 17.8214,
          suburb: 'Jakobsberg'
        }
      ]
    }
  };

  beforeEach(() => {
    if (history.location.pathname !== '/search') {
      history.push('/search');
    }
  });

  it('dispatches SET_LOCATION', () => {
    const expectedActions = [
      { type: types.SET_LOCATION, location: initialState.locationSearches.locations[0] }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.displaySearchLocation(initialState.locationSearches.locations[0].id));
    expect(store.getActions()).toEqual(expectedActions);
    expect(history.location.pathname).toEqual('/');
  });
});
