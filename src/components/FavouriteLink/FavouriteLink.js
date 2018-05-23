import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faStar as faNotFavourite} from '@fortawesome/fontawesome-free-regular';
import {faStar as faFavourite} from '@fortawesome/fontawesome-free-solid';
import {toggleFavouriteLocation} from '../../store/actions/index';
import * as selectors from "../../store/selectors";

const Star = ({isFavourite, onClick}) => {
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon icon={isFavourite ? faFavourite : faNotFavourite} size="2x" />
    </div>
  );
};

export const FavouriteLink = (props) => {
  let star = null;
  // Only possible to favourite a location if county is populated
  if (props.county !== '') {
    star = <Star
      isFavourite={props.isFavourite}
      onClick={props.onToggleFavouriteLocation} />
  }
  return (
    <Fragment>
      {star}
    </Fragment>
  );
};

export default connect((state) => ({
  county: selectors.getCounty(state),
  isFavourite: selectors.getIsFavourite(state)
}), {
  onToggleFavouriteLocation: toggleFavouriteLocation
})(FavouriteLink);
