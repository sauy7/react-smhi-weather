import React from 'react';
import {withRouter} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBack from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import css from './LocationHeader.css';

const LocationHeader = withRouter(({history, ...props}) => {
  let back = null;
  let favourite = null;
  let search = <div className={css.Search}/>;

  if (props.back) {
    back = <div onClick={history.goBack} className={css.Back}>
      <FontAwesomeIcon icon={faBack} />
      <span className={css.BackLabel}>Back</span>
    </div>
  }
  if (props.favourite) {
    favourite = (<div className={css.Favourite}>
      <FontAwesomeIcon icon={faStar} size="2x" />
    </div>);
  }
  if (props.search) {
    search = (<div className={css.Search}>
      <FontAwesomeIcon icon={faSearch} size="2x" />
    </div>);
  }
  return (
    <header className={css.ForecastHeader}>
      {back}
      {favourite}
      <div className={css.Location}>
        <h1 className={css.Suburb}>Jakobsberg</h1>
        <h2 className={css.County}>Järfälla</h2>
      </div>
      {search}
    </header>
  );
});

export default LocationHeader;
