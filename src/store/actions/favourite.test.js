import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './favourite';
import * as types from '../../constants/ActionTypes';

const mockStore = configureStore([thunk]);

describe('toggleFavouriteLocation()', () => {
  it('dispatches MAKE_LOCATION_FAVOURITE and ADD_FAVOURITE_LOCATION for a non-favourite location', () => {
    const initialState = {
      location: {
        county: 'Järfälla',
        isFavourite: false,
        lat: 59.4308,
        lon: 17.8214,
        suburb: 'Jakobsberg'
      },
      favourite: {
        locations: []
      }
    };
    const location = {
      id: 'Jakobsberg|Järfälla',
      county: 'Järfälla',
      lat: 59.4308,
      lon: 17.8214,
      suburb: 'Jakobsberg'
    };
    const expectedActions = [
      { type: types.ADD_FAVOURITE_LOCATION, location: location },
      { type: types.MAKE_LOCATION_FAVOURITE }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.toggleFavouriteLocation());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches RENOUNCE_LOCATION_FAVOURITE and REMOVE_FAVOURITE_LOCATION for a favourite location', () => {
    const initialState = {
      location: {
        county: 'Järfälla',
        isFavourite: true,
        lat: 59.4308,
        lon: 17.8214,
        suburb: 'Jakobsberg'
      },
      favourite: {
        locations: [
          {
            county: 'Järfälla',
            id: 'Jakobsberg|Järfälla',
            isFavourite: true,
            suburb: 'Jakobsberg'
          }
        ]
      }
    };
    const expectedActions = [
      { type: types.REMOVE_FAVOURITE_LOCATION, id: 'Jakobsberg|Järfälla' },
      { type: types.RENOUNCE_LOCATION_FAVOURITE }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.toggleFavouriteLocation());

    expect(store.getActions()).toEqual(expectedActions);
  })
});

describe('removeAndRenounceFavouriteLocation()', () => {
  it('dispatches RENOUNCE_LOCATION_FAVOURITE and REMOVE_FAVOURITE_LOCATION for a favourite location', () => {
    const initialState = {
      location: {
        county: 'Järfälla',
        isFavourite: true,
        suburb: 'Jakobsberg'
      },
      favourite: {
        locations: [
          { id: 'Jakobsberg|Järfälla', county: 'Järfälla', suburb: 'Jakobsberg' }
        ]
      }
    };
    const expectedActions = [
      { type: types.REMOVE_FAVOURITE_LOCATION, id: 'Jakobsberg|Järfälla' },
      { type: types.RENOUNCE_LOCATION_FAVOURITE }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.removeAndRenounceFavouriteLocation('Jakobsberg|Järfälla'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches REMOVE_FAVOURITE_LOCATION when favourite location is not the current location', () => {
    const initialState = {
      location: {
        county: 'Järfälla',
        isFavourite: true,
        suburb: 'Jakobsberg'
      },
      favourite: {
        locations: [
          { id: 'Åmal|Åmal kommun', county: 'Åmal kommun', suburb: 'Åmal' }
        ]
      }
    };
    const expectedActions = [
      { type: types.REMOVE_FAVOURITE_LOCATION, id: 'Åmal|Åmal kommun' }
    ];

    const store = mockStore(initialState);

    store.dispatch(actions.removeAndRenounceFavouriteLocation('Åmal|Åmal kommun'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});