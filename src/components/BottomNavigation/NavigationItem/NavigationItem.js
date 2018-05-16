import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import css from './NavigationItem.css';

const NavigationItem = (props) => {
  const activeStyle = {
    backgroundColor: 'cornflowerblue',
    color: 'white'
  };

  return (
    <NavLink
      activeStyle={activeStyle}
      className={css.NavigationItem}
      to={props.to}
      exact={props.exact}>
      <FontAwesomeIcon icon={props.icon} />
      <div className={css.Label}>{props.label}</div>
    </NavLink>
  );
};

export default NavigationItem;
