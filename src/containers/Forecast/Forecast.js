import React, {Component} from 'react';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import DayHeader from '../../components/DayHeader/DayHeader';
import ForecastDetail from '../../components/ForecastDetail/ForecastDetail';
import ForecastRow from '../../components/ForecastRow/ForecastRow';
import ForecastTiming from '../../components/ForecastTiming/ForecastTiming';
import css from './Forecast.css';

class Forecast extends Component {
  render() {
    return (
      <div className={css.Forecast}>
        <LocationHeader />
        <DayHeader
          date="SUN 13 MAY"
          sunrise="04:20"
          sunset="21:12" />
        <ForecastDetail
          time="19:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <ForecastRow
          time="20:00"
          description="Clear"
          temperature="20"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="21:00"
          description="Clear"
          temperature="20"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
        time="22:00"
        description="Clear"
        temperature="20"
        windSpeed="2"
        gust="4"
        precipitation="0" />
        <ForecastRow
          time="23:00"
          description="Clear"
          temperature="20"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <DayHeader
          date="MON 14 MAY"
          sunrise="04:18"
          sunset="21:14" />
        <ForecastRow
          time="00:00"
          description="Clear"
          temperature="10"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="01:00"
          description="Clear"
          temperature="10"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="10"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastTiming
          day="today"
          time="19:00" />
      </div>
    );
  }
}

export default Forecast;
