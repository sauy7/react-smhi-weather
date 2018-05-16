import React from 'react';
import WeatherIcons from 'react-weathericons';
import css from './DayHeader.css';

const DayHedaer = (props) => {
  return (
    <div className={css.DayHeader}>
      <div className={css.Date}>{props.date}</div>
      <div className={css.Sunrise}>
        <WeatherIcons name="sunrise" />
        <span className={css.Time}>{props.sunrise}</span>
      </div>
      <div className={css.Sunset}>
        <WeatherIcons name="sunset" />
        <span className={css.Time}>{props.sunset}</span>
      </div>
    </div>
  );
};

export default DayHedaer;
