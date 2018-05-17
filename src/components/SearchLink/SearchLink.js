import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

const SearchLink = () => {
  return (
    <Link to="/search">
      <FontAwesomeIcon icon={faSearch} size="2x" />
    </Link>
  );
};

export default SearchLink;
