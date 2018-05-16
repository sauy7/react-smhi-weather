import React, {Component} from 'react';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import TenDayTable from '../../components/TenDayTable/TenDayTable';
import css from './TenDays.css';

class TenDays extends Component {
  render() {
    return (
      <div className={css.TenDays}>
        <LocationHeader />
        <TenDayTable />
      </div>
    );
  }
}

export default TenDays;
