import React from 'react';
import {connect} from 'react-redux';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackLink from '../../components/BackLink/BackLink';
import SearchLink from '../../components/SearchLink/SearchLink';
import MoreSectionHeader from '../../components/MoreSectionHeader/MoreSectionHeader';
import {FavouriteItem} from '../../components/FavouriteItem/FavouriteItem';
import LocationList from '../../components/LocationList/LocationList';
import css from './StartLocation.css';
import * as selectors from '../../store/selectors/index';
import {resetStartLocation} from "../../store/actions/startLocation";

const StartLocation = (props) => {
  const goBack = <BackLink />;
  const search = <SearchLink />;

  let startLocation = (<div className={css.NoStartLocation}>Your current position</div>);

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
      <LocationList />
    </section>
  );
};

export default connect((state) => ({
  startLocation: selectors.getStartLocation(state)
}), {
  onResetStartLocation: resetStartLocation
})(StartLocation);
