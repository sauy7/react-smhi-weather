import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import {LocationHeader} from './LocationHeader';
import BackLink from '../BackLink/BackLink';
import FavouriteLink from '../FavouriteLink/FavouriteLink';
import SearchLink from '../SearchLink/SearchLink';

describe('<LocationHeader />', () => {
  let wrapper;

  it('renders <h1> and <h2> location headers', () => {
    wrapper = shallow(<LocationHeader county="Järfälla" suburb="Jakobsberg" />);
    expect(wrapper.find(PageHeader)).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('Jakobsberg');
    expect(wrapper.find('h2').text()).toEqual('Järfälla');
    expect(wrapper.find(PageHeader).prop('leftFunction')).toEqual(null);
    expect(wrapper.find(PageHeader).prop('rightFunction')).toEqual(null);
  });

  it('renders <PageHeader /> with left- and rightFunction props', () => {
    wrapper = shallow(<LocationHeader county="" suburb="" favourite={true} search={true} />);
    expect(wrapper.find(PageHeader).prop('leftFunction')).toEqual(<FavouriteLink />);
    expect(wrapper.find(PageHeader).prop('rightFunction')).toEqual(<SearchLink />);
  });

  it('renders <PageHedaer /> with leftFunction prop prioritising <BackLink /> over <FavouriteLink />', () => {
    wrapper = shallow(<LocationHeader county="" suburb="" back={true} favourite={true} />);
    expect(wrapper.find(PageHeader).prop('leftFunction')).toEqual(<BackLink />);
  });
});
