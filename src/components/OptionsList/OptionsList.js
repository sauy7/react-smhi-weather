import React from 'react';
import css from './OptionsList.css';

const OptionsList = (props) => {
  const options = props.options.map(option => {
    return <li key={option} className={option === props.active ? css.Active : null}>{option}</li>
  });

  return (
    <ul className={css.OptionsList}>
      {options}
    </ul>
  );
};

export default OptionsList;
