import React from 'react';
import BottomNavigation from './BottomNavigation';
import NavigationItem from "./NavigationItem/NavigationItem";

describe('<BottomNavigation/>', () => {
  it('should render 3 <NavigationItem /> components', () => {
    const wrapper = shallow(<BottomNavigation/>);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
