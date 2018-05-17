import React, {Component} from 'react';
import Settings from '../../components/Settings/Settings';
import FavouritesList from '../../components/FavouritesList/FavouritesList';
import About from '../../components/About/About';
import PageHeader from "../../components/PageHeader/PageHeader";

class More extends Component {
  render() {
    return (
      <section className="page">
        <PageHeader>
          <h1>More</h1>
        </PageHeader>
        <Settings />
        <FavouritesList />
        <About />
      </section>
    );
  }
}

export default More;
