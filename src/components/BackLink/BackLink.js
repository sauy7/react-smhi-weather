import React from 'react';
import {withRouter} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBack from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import css from './BackLink.css';

const BackLink = withRouter(({history}) => {
  return (
    <div onClick={history.goBack}>
      <FontAwesomeIcon icon={faBack} />
      <span className={css.BackLabel}>Back</span>
    </div>
  );
});

export default BackLink;
