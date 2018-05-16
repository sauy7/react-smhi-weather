import React, {Component, Fragment} from 'react';
import Settings from '../../components/Settings/Settings';
import Favourites from '../../components/Favourites/Favourites';
import About from '../../components/About/About';
import css from './More.css';

class More extends Component {
  render() {
    return (
      <Fragment>
        <header className={css.MoreHeader}>
          <h1>More</h1>
        </header>
        <Settings />
        <Favourites />
        <About />
      </Fragment>
    );
  }
}

export default More;