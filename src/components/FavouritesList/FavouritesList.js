import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../store/selectors/index';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import MoreSectionHeader from '../MoreSectionHeader/MoreSectionHeader';
import {FavouriteItem, NoFavouriteItem} from "../FavouriteItem/FavouriteItem";
import {removeAndRenounceFavouriteLocation} from '../../store/actions/index';
import css from './FavouritesList.css';

export const FavouritesList = (props) => {
  let locations = (
    <CSSTransition
      key="none"
      classNames="delayed-fade-in"
      timeout={300}>
      <NoFavouriteItem />
    </CSSTransition>
  );

  if (props.locations.length > 0) {
    locations = props.locations.map(location => {
      return (
        <CSSTransition
          key={location.id}
          classNames="fade-out"
          timeout={300}>
          <FavouriteItem
            suburb={location.suburb}
            county={location.county}
            onClick={() => props.onRemoveFavouriteLocation(location.id)} />
        </CSSTransition>
      );
    });
  }

  return (
    <section>
      <MoreSectionHeader name="Favourites" />
      <TransitionGroup component="ul" className={css.FavouritesList}>
        {locations}
      </TransitionGroup>
    </section>
  );
};

export default connect((state) => ({
  locations: selectors.getFavouriteLocations(state)
}), {
  onRemoveFavouriteLocation: removeAndRenounceFavouriteLocation
})(FavouritesList);
