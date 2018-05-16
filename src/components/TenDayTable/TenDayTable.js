import React from 'react';
import TenDayRow from '../../components/TenDayRow/TenDayRow';
import css from './TenDayTable.css';

const TenDayTable = () => {
  return (
    <table className={css.TenDayTable}>
      <thead>
      <tr>
        <th scope="column" className={css.DayHeader}>Day</th>
        <th scope="column">Low</th>
        <th scope="column">High</th>
        <th scope="column">Night</th>
        <th scope="column">Day</th>
        <th scope="column" className={css.PrecipitationHeader}>Precip.</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        <TenDayRow
          day="Today"
          date="13 May"
          low="13"
          high="24"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="6" />
        <TenDayRow
          day="Mon"
          date="14 May"
          low="15"
          high="26"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Tue"
          date="15 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Wed"
          date="16 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Thu"
          date="17 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Fri"
          date="18 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Sat"
          date="19 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Sun"
          date="20 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Mon"
          date="21 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
        <TenDayRow
          day="Tue"
          date="22 May"
          low="14"
          high="25"
          nightIcon="night-clear"
          dayIcon="day-sunny"
          precipitation="0"
          precipitationHours="24" />
      </tbody>
    </table>
  );
};

export default TenDayTable;
