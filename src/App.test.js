import React from 'react';
import {App} from './App';

describe('<App />', () => {
  let wrapper;

  // Mock onChangeLocation function to replace the one provided by
  // mapDispatchToProps
  const mockOnChangeLocation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App onChangeLocation={mockOnChangeLocation}/>);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
