import React from 'react';
import {connect} from 'react-redux';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackLink from '../../components/BackLink/BackLink';
import SearchLink from '../../components/SearchLink/SearchLink';
import MoreSectionHeader from '../../components/MoreSectionHeader/MoreSectionHeader';
import {FavouriteItem, NoFavouriteItem} from '../../components/FavouriteItem/FavouriteItem';
import LocationList from '../../components/LocationList/LocationList';
import css from './StartLocation.css';
import * as selectors from '../../store/selectors/index';
import * as actions from '../../store/actions';

const StartLocation = (props) => {
  const goBack = <BackLink />;
  const search = <SearchLink />;
  const emptyList = <NoFavouriteItem />;
  let startLocation = (<div className={css.NoStartLocation}>Your current position</div>);
  const locations = props.locations.filter(location => location.id !== props.startLocation);

  if (props.startLocation !== null) {
    const [suburb, county] = props.startLocation.split('|');
    startLocation = (<FavouriteItem
      suburb={suburb}
      county={county}
      onClick={() => props.onResetStartLocation(props.startLocation)} />
    );
  }

  return (
    <section className="page">
      <PageHeader leftFunction={goBack} rightFunction={search}>
        <h1>Start Location</h1>
      </PageHeader>
      <MoreSectionHeader name="Current start location"/>
      <div className={css.CurrentStartLocation}>
        {startLocation}
      </div>
      <MoreSectionHeader name="Choose from favourites"/>
      <LocationList
        emptyList={emptyList}
        locations={locations}
        onClickLocation={props.onClickLocation} />
    </section>
  );
};

export default connect((state) => ({
  startLocation: selectors.getStartLocation(state),
  locations: selectors.getFavouriteLocations(state)
}), {
  onResetStartLocation: actions.resetStartLocation,
  onClickLocation: actions.setStartLocation
})(StartLocation);
