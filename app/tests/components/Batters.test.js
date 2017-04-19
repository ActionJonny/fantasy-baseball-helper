import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'

import Batters from '../../components/Batters/Batters';
import batterData from '../../data/batters.js'

describe('Batter', () => {

  it('batter should have a table', () => {
    const wrapper = shallow(<Batters history={browserHistory} batters={jest.fn()} />)

    expect(wrapper.find('table').length).toEqual(1);
  });

  it('batter should have td with the length of 11 stats', () => {
    const wrapper = shallow(<Batters history={browserHistory} batters={jest.fn()} />);

    expect(wrapper.find('td').length).toEqual(11)
  });

  it('batter should have a nav link to the home screen', () => {
    const wrapper = shallow(<Batters history={browserHistory} batters={jest.fn()} />);

    expect(wrapper.find('.home').props().to).toEqual('/')
  });

  it('batter should have a nav link to the home screen', () => {
    const wrapper = shallow(<Batters history={browserHistory} batters={jest.fn()} />);

    expect(wrapper.find('.home').props().children).toEqual('Home Page')
  });
});
