import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import css from './LocationList.css';

const LocationList = () => {
  return (
    <ul className={css.LocationList}>
      <li>
        <span className={css.Suburb}>Suburb</span>
        <span className={css.County}>County</span>
        <FontAwesomeIcon icon={faRight} />
      </li>
    </ul>
  );
};

export default LocationList;
