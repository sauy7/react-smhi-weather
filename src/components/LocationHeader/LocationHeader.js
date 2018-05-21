import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BackLink from '../BackLink/BackLink';
import FavouriteLink from '../FavouriteLink/FavouriteLink';
import SearchLink from '../SearchLink/SearchLink';
import PageHeader from '../PageHeader/PageHeader';
import * as selectors from '../../store/selectors/index';

export const LocationHeader = (props) => {
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
      <h1>{props.suburb}</h1>
      <h2>{props.county}</h2>
    </PageHeader>
  );
};

LocationHeader.propTypes = {
  county: PropTypes.string.isRequired,
  suburb: PropTypes.string.isRequired
};

export default connect((state) => ({
  county: selectors.getCounty(state),
  suburb: selectors.getSuburb(state)
}))(LocationHeader);