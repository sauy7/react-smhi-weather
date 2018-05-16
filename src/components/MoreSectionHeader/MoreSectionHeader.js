import React from 'react';
import css from './MoreSectionHeader.css';

const MoreSectionHeader = (props) => {
  return (
    <header>
      <h2 className={css.MoreSectionHeader}>{props.name}</h2>
    </header>
  );
};

export default MoreSectionHeader;
