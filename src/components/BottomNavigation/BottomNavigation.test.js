import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BottomNavigation from './BottomNavigation';
import NavigationItem from "./NavigationItem/NavigationItem";

configure({adapter: new Adapter()});

describe('<BottomNavigation/>', () => {
  it('should render 3 <NavigationItem /> components', () => {
    const wrapper = shallow(<BottomNavigation/>);
    expect(wrapper.find(<NavigationItem to="/" />)).toBeTruthy();
    expect(wrapper.find(<NavigationItem to="/ten-days"/>)).toBeTruthy();
    expect(wrapper.find(<NavigationItem to="/more"/>)).toBeTruthy();
  });
});
