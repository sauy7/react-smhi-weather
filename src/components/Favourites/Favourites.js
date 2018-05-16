import React from 'react';
import MoreSectionHeader from '../MoreSectionHeader/MoreSectionHeader';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRemove from "@fortawesome/fontawesome-free-regular/faTrashAlt";
import css from './Favourites.css';

const Favourites = () => {
  return (
    <section>
      <MoreSectionHeader name="Favourites" />
      <ul className={css.Favourites}>
        <li>
          <span className={css.Label}>Place name</span>
          <FontAwesomeIcon icon={faRemove} />
        </li>
        <li>
          <span className={css.Label}>Place name</span>
          <FontAwesomeIcon icon={faRemove} />
        </li>
      </ul>
    </section>
  );
};

export default Favourites;
