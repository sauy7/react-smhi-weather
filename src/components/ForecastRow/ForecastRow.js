import React from 'react';
import WeatherIcons from 'react-weathericons';
import css from './ForecastRow.css';

const ForecastRow = (props) => {
  return (
    <div className={css.ForecastRow}>
      <div>
        <div className={css.TimeAndTemperature}>
          <div className={css.Time}>{props.time}</div>
          <div className={css.Temperature}>
            <span className={css.TemperatureNumber}>{props.temperature}</span>
            &deg;C
          </div>
        </div>
        <div className={css.Description}>
          {props.description}
        </div>
      </div>
      <div className={css.WeatherSymbol}>
        <WeatherIcons name="day-sunny" size="2x" />
      </div>
      <div className={css.Wind}>
        <div className={css.WindSymbol}>
          <WeatherIcons name="direction-left" size="2x" />
        </div>
        <div className={css.WindSpeed}>
          <span className={css.WindSpeedNumber}>{props.windSpeed}</span>
          ({props.gust}) {props.windDirection}<br/>
          m/s
        </div>
      </div>
      <div className={css.Precipitation}>
        <div className={css.PrecipitationNumber}>{props.precipitation}</div>
        mm/h
      </div>
    </div>
  );
};

export default ForecastRow;
