export const getCounty = state => state.location.county;
export const getSuburb = state => state.location.suburb;
export const getLatitude = state => state.location.lat;
export const getLongitude = state => state.location.lon;
export const getIsFavourite = state => state.location.isFavourite;
export const getCurrentLocationId = state => [getSuburb(state), getCounty(state)].join('|');

export const getFavouriteLocations = state => state.favourite.locations;

export const getStartLocation = state => state.startLocation.locationId;

export const getLocationSearches = state => state.locationSearches.locations;
