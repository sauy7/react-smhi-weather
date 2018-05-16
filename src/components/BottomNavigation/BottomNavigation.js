import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import faStart from '@fortawesome/fontawesome-free-solid/faHome';
import faTenDays from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import faMore from '@fortawesome/fontawesome-free-solid/faCog';
import css from './BottomNavigation.css';

const BottomNavigation = () => {
  const items = [
    { to: '/', exact: true, icon: faStart, label: 'Start' },
    { to: '/ten-days', exact: false, icon: faTenDays, label: '10 Days' },
    { to: '/more', exact: false, icon: faMore, label: 'More' },
  ];
  const navigationItems = items.map(item => {
    return <NavigationItem
      to={item.to}
      exact={item.exact}
      icon={item.icon}
      label={item.label}
      key={item.to} />
  })

  return (
    <nav className={css.BottomNavigation}>
      {navigationItems}
    </nav>
  );
};

export default BottomNavigation;
