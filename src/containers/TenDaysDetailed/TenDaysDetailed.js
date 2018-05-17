import React, {Component} from 'react';
import LocationHeader from '../../components/LocationHeader/LocationHeader';
import DayHeader from '../../components/DayHeader/DayHeader';
import ForecastRow from '../../components/ForecastRow/ForecastRow';

class TenDaysDetailed extends Component {
  render() {
    return (
      <section className="page">
        <LocationHeader
          back={true}
          favourite={false}
          search={false} />
        <DayHeader
          date="SUN 13 MAY"
          sunrise="04:20"
          sunset="21:12" />
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
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="TUE 15 MAY"
          sunrise="04:16"
          sunset="21:16" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="WED 16 MAY"
          sunrise="04:14"
          sunset="21:18" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="THU 17 MAY"
          sunrise="04:14"
          sunset="21:18" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="FRI 18 MAY"
          sunrise="04:12"
          sunset="21:20" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="SAT 19 MAY"
          sunrise="04:10"
          sunset="21:22" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="SUN 20 MAY"
          sunrise="04:08"
          sunset="21:24" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="MON 21 MAY"
          sunrise="04:06"
          sunset="21:26" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
        <DayHeader
          date="TUE 22 MAY"
          sunrise="04:04"
          sunset="21:28" />
        <ForecastRow
          time="02:00"
          description="Clear"
          temperature="12"
          windDirection="E"
          windSpeed="2"
          gust="4"
          precipitation="0" />
        <ForecastRow
          time="14:00"
          description="Clear"
          temperature="21"
          windDirection="E"
          windSpeed="3"
          gust="7"
          precipitation="0" />
      </section>
    );
  }
}

export default TenDaysDetailed;
