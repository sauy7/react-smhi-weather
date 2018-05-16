import React from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import WeatherIcons from 'react-weathericons';
import faRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import css from './TenDayRow.css';

const TenDayRow = withRouter(({history, ...props}) => {
  return (
    <tr onClick={() => history.push('/ten-days/detailed')}>
      <td className={css.DayCell}>
        <div className={css.Day}>{props.day}</div>
        <div className={css.Date}>{props.date}</div>
      </td>
      <td className={css.Low}>{props.low}&deg;</td>
      <td className={css.High}>{props.high}&deg;</td>
      <td><WeatherIcons name={props.nightIcon}/></td>
      <td><WeatherIcons name={props.dayIcon}/></td>
      <td className={css.PrecipitationCell}>
        <div className={css.PrecipitationNumber}>{props.precipitation}</div>
        mm/{props.precipitationHours}h
      </td>
      <td>
        <FontAwesomeIcon icon={faRight}/>
      </td>
    </tr>
  )
});

export default TenDayRow;
