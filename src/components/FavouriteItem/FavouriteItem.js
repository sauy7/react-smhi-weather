import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTrashAlt as faRemove} from '@fortawesome/fontawesome-free-regular';
import css from './FavouriteItem.css';

export const FavouriteItem = (props) => {
  return (
    <li className={css.FavouriteItem}>
      <span className={css.Suburb}>{props.suburb}</span>
      <span className={css.County}>{props.county}</span>
      <div onClick={props.onClick}>
        <FontAwesomeIcon icon={faRemove} />
      </div>
    </li>
  );
};

export const NoFavouriteItem = () => {
  return (
    <li className={css.NoFavouriteItem}>
      No favourite locations
    </li>
  );
};
