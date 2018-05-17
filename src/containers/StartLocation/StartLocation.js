import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackLink from '../../components/BackLink/BackLink';
import SearchLink from '../../components/SearchLink/SearchLink';
import MoreSectionHeader from "../../components/MoreSectionHeader/MoreSectionHeader";
import LocationList from '../../components/LocationList/LocationList';
import css from './StartLocation.css';

const StartLocation = () => {
  const goBack = <BackLink />;
  const search = <SearchLink />;

  return (
    <section className="page">
      <PageHeader leftFunction={goBack} rightFunction={search}>
        <h1>Start Location</h1>
      </PageHeader>
      <MoreSectionHeader name="Current start location"/>
      <div className={css.CurrentStartLocation}>
        No starting location, defaults to your current position
      </div>
      <MoreSectionHeader name="Choose from favourites"/>
      <LocationList />
    </section>
  );
};

export default StartLocation;
