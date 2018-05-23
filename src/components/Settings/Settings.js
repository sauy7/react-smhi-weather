import React from 'react';
import {Link} from 'react-router-dom';
import MoreSectionHeader from '../MoreSectionHeader/MoreSectionHeader';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faComment as faLanguage} from '@fortawesome/fontawesome-free-regular';
import {faMapMarkerAlt as faLocation} from '@fortawesome/fontawesome-free-solid';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
import {faPaintBrush as faTheme} from '@fortawesome/fontawesome-free-solid';
import css from './Settings.css';

const Settings = () => {
  return (
    <section>
      <MoreSectionHeader name="Settings" />
      <ul className={css.Settings}>
        <li>
          <Link to="/more/start-location">
            <FontAwesomeIcon icon={faLocation} />
            <span className={css.Label}>Start location</span>
            <FontAwesomeIcon icon={faRight} />
          </Link>
        </li>
        <li>
          <Link to="/more/themes">
            <FontAwesomeIcon icon={faTheme} />
            <span className={css.Label}>Theme</span>
            <FontAwesomeIcon icon={faRight} />
          </Link>
        </li>
        <li>
          <Link to="/more/languages">
            <FontAwesomeIcon icon={faLanguage} />
            <span className={css.Label}>Language</span>
            <FontAwesomeIcon icon={faRight} />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Settings;
