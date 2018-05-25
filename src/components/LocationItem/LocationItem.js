import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
import css from './LocationItem.css';

const LocationItem = (props) => {
  return (
    <li className={css.LocationItem}>
      <span className={css.Suburb}>{props.suburb}</span>
      <span className={css.County}>{props.county}</span>
      <div onClick={props.onClick}>
        <FontAwesomeIcon icon={faRight} />
      </div>
    </li>
  );
};

export default LocationItem;
