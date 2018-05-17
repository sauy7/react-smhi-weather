import React, {Component} from 'react';
import Settings from '../../components/Settings/Settings';
import Favourites from '../../components/Favourites/Favourites';
import About from '../../components/About/About';
import css from './More.css';

class More extends Component {
  render() {
    return (
      <section className={[css.More, 'page'].join(' ')}>
        <header className={css.MoreHeader}>
          <h1>More</h1>
        </header>
        <Settings />
        <Favourites />
        <About />
      </section>
    );
  }
}

export default More;
