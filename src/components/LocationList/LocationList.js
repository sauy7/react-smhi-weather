import React from 'react';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
import {NoFavouriteItem} from '../FavouriteItem/FavouriteItem';
import css from './LocationList.css';
import * as selectors from '../../store/selectors/index';
import * as actions from '../../store/actions/index';

export const LocationList = (props) => {
  let locations = <NoFavouriteItem />;

  if (props.locations.length > 0) {
    locations = props.locations.map(location => {
      let listItem = null;
      if (location.id !== props.startLocation) {
        listItem = (<li key={location.id}>
          <span className={css.Suburb}>{location.suburb}</span>
          <span className={css.County}>{location.county}</span>
          <div onClick={() => props.onSetStartLocation(location.id)}>
            <FontAwesomeIcon icon={faRight} />
          </div>
        </li>);
      }
      return(listItem);
    });
  }

  return (
    <ul className={css.LocationList}>
      {locations}
    </ul>
  );
};

export default connect((state) => ({
  startLocation: selectors.getStartLocation(state),
  locations: selectors.getFavouriteLocations(state)
}), {
  onSetStartLocation: actions.setStartLocation
})(LocationList);
