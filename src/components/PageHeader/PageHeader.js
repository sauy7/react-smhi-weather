import React from 'react';
import css from './PageHeader.css';

const PageHeader = (props) => {
  return (
    <header className={css.PageHeader}>
      <div className={css.LeftFunction}>
        {props.leftFunction}
      </div>
      <div className={css.Title}>
        {props.children}
      </div>
      <div className={css.RightFunction}>
        {props.rightFunction}
      </div>
    </header>
  );
};

export default PageHeader;
