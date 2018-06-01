import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../store/selectors/index';
import * as actions from '../../store/actions/index';
import PlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import BackLink from '../../components/BackLink/BackLink';
import PageHeader from '../../components/PageHeader/PageHeader';
import MoreSectionHeader from '../../components/MoreSectionHeader/MoreSectionHeader';
import LocationItem from '../../components/LocationItem/LocationItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faChevronRight as faRight} from '@fortawesome/fontawesome-free-solid';
import LocationList from '../../components/LocationList/LocationList';
import intersection from 'lodash/intersection';
import css from './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: '',
      lat: null,
      lon: null,
      query: '',
      suburb: 'Loading location...'
    };
    this.excludedLocationTypes = ['establishment', 'route'];
  }

  componentDidMount() {
    this.search.focus();
    if ('geolocation' in navigator) { // geolocation supported
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.props.onGeolocation(lat, lon).then(location => {
          this.setState({
            county: location.county,
            lat: location.lat,
            lon: location.lon,
            suburb: location.suburb
          });
        });
      }, (/*error*/) => { // geolocation did not work
        this.setState({ county: '', suburb: 'Unknown' })
      }, { maximumAge: 120000, timeout: 10000 });
    } else { // geolocation not supported
      this.setState({ county: '', suburb: 'Unknown' })
    }
  }

  onChangeHandler = (query) => {
    this.setState({ query: query });
  };

  onSelectCurrentPositionHandler = () => {
    if (this.state.lat && this.state.lon) {
      const location = {
        county: this.state.county,
        lat: this.state.lat,
        lon: this.state.lon,
        suburb: this.state.suburb
      };
      return this.props.onSetAndDisplayCurrentLocation(location);
    } else {
      return null;
    }
  };

  onSelectHandler = (_address, placeId) => {
    geocodeByPlaceId(placeId)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.onSearchLocationSelect(latLng.lat, latLng.lng);
      })
      .catch(error => console.error('Error', error));
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
    const emptyList = <div className={css.NoPreviousSearches}>No previous searches</div>;

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
            suburb={this.state.suburb}
            county={this.state.county}
            onClick={this.onSelectCurrentPositionHandler} />
          <MoreSectionHeader name="Latest searches"/>
          <LocationList
            emptyList={emptyList}
            locations={this.props.locations}
            onClickLocation={this.props.onClickLocation} />
        </form>
      </section>
    );
  }
}

export default connect((state) => ({
  locations: selectors.getLocationSearches(state)
}), {
  onGeolocation: actions.getCurrentLocation,
  onSearchLocationSelect: actions.addAndDisplaySearchLocation,
  onClickLocation: actions.displaySearchLocation,
  onSetAndDisplayCurrentLocation: actions.setAndDisplayCurrentLocation
})(Search);
