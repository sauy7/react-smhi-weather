import React from 'react';
import BackLink from '../../components/BackLink/BackLink';
import PageHeader from '../../components/PageHeader/PageHeader';
import MoreSectionHeader from '../../components/MoreSectionHeader/MoreSectionHeader';
import LocationList from '../../components/LocationList/LocationList';
import css from './Search.css';

const Search = () => {
  const goBack = <BackLink />;

  return (
    <section className="page">
      <PageHeader leftFunction={goBack}>
        <h1>Search</h1>
      </PageHeader>
      <form>
        <div className={css.FormGroup}>
          <input
            className={css.SearchInput}
            placeholder="Search"
            type="search"/>
        </div>
        <MoreSectionHeader name="Your current position"/>
        <LocationList />
        <MoreSectionHeader name="Latest searches"/>
        <LocationList />
      </form>
    </section>
  );
};

export default Search;
