import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import css from './LocationHeader.css';

const LocationHeader = () => {
  return (
    <div className={css.ForecastHeader}>

      <div className={css.Favourite}>
        <FontAwesomeIcon icon={faStar} size="2x" />
      </div>
      <div className={css.Location}>
        <h1 className={css.Suburb}>Jakobsberg</h1>
        <h2 className={css.County}>Järfälla</h2>
      </div>
      <div className={css.Search}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>
    </div>
  );
};

export default LocationHeader;
