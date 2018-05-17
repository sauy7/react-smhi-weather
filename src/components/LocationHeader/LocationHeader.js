import React from 'react';
import BackLink from '../BackLink/BackLink';
import FavouriteLink from '../FavouriteLink/FavouriteLink';
import SearchLink from '../SearchLink/SearchLink';
import PageHeader from '../PageHeader/PageHeader';

const LocationHeader = (props) => {
  let goBack = null;
  let favourite = null;
  let search = null;

  if (props.back) {
    goBack = <BackLink />;
  }
  if (props.favourite) {
    favourite = <FavouriteLink />;
  }
  if (props.search) {
    search = <SearchLink />;
  }
  return (
    <PageHeader leftFunction={goBack || favourite} rightFunction={search}>
      <h1>Jakobsberg</h1>
      <h2>Järfälla</h2>
    </PageHeader>
  );
};

export default LocationHeader;
