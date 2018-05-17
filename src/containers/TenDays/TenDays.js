import React, {Component} from 'react';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import TenDayTable from '../../components/TenDayTable/TenDayTable';
import css from './TenDays.css';

class TenDays extends Component {
  render() {
    return (
      <section className={[css.TenDays, 'page'].join(' ')}>
        <LocationHeader
          back={false}
          favourite={true}
          search={true}/>
        <TenDayTable />
      </section>
    );
  }
}

export default TenDays;
