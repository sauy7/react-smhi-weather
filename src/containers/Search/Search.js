import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../store/selectors/index';
import * as actions from '../../store/actions/location';
import PlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import BackLink from '../../components/BackLink/BackLink';
import PageHeader from '../../components/PageHeader/PageHeader';
import MoreSectionHeader from '../../components/MoreSectionHeader/MoreSectionHeader';
import LocationItem from '../../components/LocationItem/LocationItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
// import LocationList from '../../components/LocationList/LocationList';
import intersection from 'lodash/intersection';
import css from './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.excludedLocationTypes = ['establishment', 'route'];
  }

  componentDidMount() {
    this.search.focus();
  }

  onChangeHandler = (query) => {
    this.setState({ query: query });
  };

  onSelectHandler = (address, placeId) => {
    geocodeByPlaceId(placeId)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const lat = latLng.lat;
        const lon = latLng.lng;
        this.props.onSearchLocationSelect(lat, lon).then(() => {
          this.props.history.push('/');
        });
      })
      .catch(error => console.error('Error', error))
  };

  displaySuggestions = ({ getInputProps, suggestions, getSuggestionItemProps }) => (
    <div>
      <input
        {...getInputProps({
          placeholder: 'Enter a location...',
          className: css.SearchInput,
          ref: input => this.search = input
        })}
      />
      <div className={css.DropdownContainer}>
        {suggestions.map(suggestion => {
          const className = suggestion.active ? css.SuggestionItemActive : css.SuggestionItem;
          let item = null;
          if (intersection(suggestion.types, this.excludedLocationTypes).length === 0) {
            const [suburb, county] = suggestion.description.split(', ');
            item = (<div {...getSuggestionItemProps(suggestion, { className })}>
              <div className={css.Suburb}>{suburb}</div>
              <div className={css.County}>{county}</div>
              <FontAwesomeIcon icon={faRight} />
            </div>);
          }
          return (item);
        })}
      </div>
    </div>
  );

  render() {
    const goBack = <BackLink />;
    const searchOptions = {
      componentRestrictions: { country: 'se' },
      types: ['geocode']
    };

    return (
      <section className="page">
        <PageHeader leftFunction={goBack}>
          <h1>Search</h1>
        </PageHeader>
        <form>
          <div className={css.FormGroup}>
            <PlacesAutocomplete
              className={css.SearchInput}
              debounce={250}
              onChange={this.onChangeHandler}
              onSelect={this.onSelectHandler}
              searchOptions={searchOptions}
              value={this.state.query}>
              {this.displaySuggestions}
            </PlacesAutocomplete>
          </div>
          <MoreSectionHeader name="Your current position"/>
          <LocationItem
            suburb={this.props.suburb}
            county={this.props.county} />
          <MoreSectionHeader name="Latest searches"/>
          {/*<LocationList />*/}
        </form>
      </section>
    );
  }
}

export default connect((state) => ({
  county: selectors.getCounty(state),
  suburb: selectors.getSuburb(state)
}), {
  onSearchLocationSelect: actions.setLocation
})(Search);
