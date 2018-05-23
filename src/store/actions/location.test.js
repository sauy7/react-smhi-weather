import MockAdapter from 'axios-mock-adapter';
import * as actions from './location';
import OSMAxios from '../../axios/OSMAxios';
import * as types from '../../constants/ActionTypes';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

describe('setLocation()', () => {
  let mockAxios;
  const lat = 59.4307;
  const lon = 17.8214;
  const initialState = {
    location: {},
    favourite: {
      locations: []
    },
    startLocation: null
  };
  const expected = {
    county: 'Järfälla', lat: lat, lon: lon, suburb: 'Jakobsberg', isFavourite: false
  };
  const unknown = {
    county: [lat, lon].join(', '), lat: lat, lon: lon, suburb: 'Unknown', isFavourite: false
  };
  const fallback = {
    county: 'Stockholm kommun', lat: 59.3345, lon: 18.0632, suburb: 'Stockholm', isFavourite: false
  };

  beforeEach(() => {
    mockAxios = new MockAdapter(OSMAxios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('dispatches SET_LOCATION with a suburb', () => {
    mockAxios
      .onGet('/reverse', { params: { lat: lat, lon: lon, format: 'json'} })
      .reply(200, {
        address: { suburb: 'Jakobsberg', county: 'Järfälla' }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: expected }
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.setLocation(lat, lon)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SET_LOCATION with a city as suburb', () => {
    mockAxios
      .onGet('/reverse', { params: { lat: lat, lon: lon, format: 'json'} })
      .reply(200, {
        address: {
          city: 'Jakobsberg', municipality: 'IGNORED', suburb: 'IGNORED',
          county: 'Järfälla'
        }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: expected }
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.setLocation(lat, lon)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SET_LOCATION with an unknown suburb after network error', () => {
    mockAxios.onGet('/reverse').networkError();
    const expectedActions = [
      { type: types.SET_LOCATION, location: unknown }
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.setLocation(lat, lon)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SET_LOCATION with the fallback location', () => {
    const params = { lat: fallback.lat, lon: fallback.lon, format: 'json'};
    mockAxios
      .onGet('/reverse', { params: params })
      .reply(200, {
        address: { suburb: fallback.suburb, county: fallback.county }
      });
    const expectedActions = [
      { type: types.SET_LOCATION, location: fallback }
    ];
    const store = mockStore(initialState);

    return store.dispatch(actions.setLocation()).then(() => { // no coords
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
