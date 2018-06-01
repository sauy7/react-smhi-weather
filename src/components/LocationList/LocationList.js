import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
import css from './LocationList.css';

export const LocationList = (props) => {
  let locations = props.emptyList;

  if (props.locations.length > 0) {
    locations = props.locations.map(location => {
      return (<li key={location.id}>
        <span className={css.Suburb}>{location.suburb}</span>
        <span className={css.County}>{location.county}</span>
        <div onClick={() => props.onClickLocation(location.id)}>
          <FontAwesomeIcon icon={faRight} />
        </div>
      </li>);
    });
  }

  return (
    <ul className={css.LocationList}>
      {locations}
    </ul>
  );
};

export default LocationList;
