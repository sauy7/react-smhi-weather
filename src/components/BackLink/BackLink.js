import React from 'react';
import {withRouter} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faChevronLeft as faBack} from '@fortawesome/fontawesome-free-solid';
import css from './BackLink.css';

const BackLink = withRouter(({history}) => {
  return (
    <div className={css.BackLink} onClick={history.goBack}>
      <FontAwesomeIcon icon={faBack} />
      <span className={css.BackLabel}>Back</span>
    </div>
  );
});

export default BackLink;
