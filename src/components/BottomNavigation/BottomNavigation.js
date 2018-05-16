import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStart from '@fortawesome/fontawesome-free-solid/faHome';
import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import faMore from '@fortawesome/fontawesome-free-solid/faCog';
import css from './BottomNavigation.css';

const BottomNavigation = () => {
  return (
    <nav className={css.BottomNavigation}>
      <div className={css.Home}>
        <FontAwesomeIcon icon={faStart} />
        <div>START</div>
      </div>
      <div className={css.TenDays}>
        <FontAwesomeIcon icon={faCalendar}/>
        <div>10 DAYS</div>
      </div>
      <div className={css.More}>
        <FontAwesomeIcon icon={faMore}/>
        <div>MORE</div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
