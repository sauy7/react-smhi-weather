import React from 'react';
import WeatherIcons from 'react-weathericons';
import css from './ForecastDetail.css';

const ForecastDetail = (props) => {
  return (
    <div className={css.ForecastDetail}>
      <div className={css.Header}>
        <div className={css.Time}>{props.time}</div>
        <div className={css.Description}>{props.description}</div>
      </div>
      <div className={css.Body}>
        <div className={css.WeatherSymbol}>
          <WeatherIcons name="day-sunny" size="3x" />
        </div>
        <div className={css.Temperature}>
          <span className={css.TemperatureNumber}>{props.temperature}</span>
          <span className={css.TemperatureSymbol}>&deg;C</span>
        </div>
        <div className={css.WindAndPrecipitation}>
          <div className={css.Wind}>
            <WeatherIcons name="direction-left" />
            <span className={css.WindSpeed}>{props.windSpeed}</span>
            ({props.gust}) m/s {props.windDirection}
          </div>
          <div className={css.Precipitation}>
            <WeatherIcons name="raindrop" />
            <span className={css.PrecipitationNumber}>{props.precipitation}</span>
            mm/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastDetail;
