import React from 'react'
import { shallow } from 'enzyme'

import App from '../../components/App/App';

describe('App', () => {

  it('app should have on section rendered', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('section').length).toBe(1);
  });

  it('app should have four routes in the render section', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Route').length).toBe(4)
  });
});
