import React from 'react';
import MoreSectionHeader from '../MoreSectionHeader/MoreSectionHeader';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRemove from "@fortawesome/fontawesome-free-regular/faTrashAlt";
import css from './FavouritesList.css';

const FavouritesList = () => {
  return (
    <section>
      <MoreSectionHeader name="Favourites" />
      <ul className={css.FavouritesList}>
        <li>
          <span className={css.Location}>Suburb</span>
          <span className={css.County}>County</span>
          <FontAwesomeIcon icon={faRemove} />
        </li>
      </ul>
    </section>
  );
};

export default FavouritesList;
