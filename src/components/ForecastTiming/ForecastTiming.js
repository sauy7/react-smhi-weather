import React from 'react';
import css from './ForecastTiming.css';

const ForecastTiming = (props) => {
  return (
    <div className={css.ForecastTiming}>
      Forecast issued {props.day} at {props.time} local time
    </div>
  );
};

export default ForecastTiming;
