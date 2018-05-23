export const getCounty = state => state.location.county;
export const getSuburb = state => state.location.suburb;
export const getIsFavourite = state => state.location.isFavourite;
export const getCurrentLocationId = state => [getSuburb(state), getCounty(state)].join('|');

export const getFavouriteLocations = state => state.favourite.locations;
