import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'

import Home from '../../components/Home/Home';
import batterData from '../../data/batters.js'
import pitcherData from '../../data/pitchers.js'

describe('Home', () => {

  it('home should have one section', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('section').length).toBe(1);
  });

  it('home should have two nav links', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('NavLink').length).toBe(2)
  });

  it('home should have a nav link to the pitchers screen', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('.pitcher-link').props().to).toEqual('/pitchers')
  });

  it('home should have a nav link to the batters screen', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('.pitcher-link').props().children).toEqual('Pitchers')
  });

  it('home should have a nav link to the batters screen', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('.batters-link').props().to).toEqual('/batters')
  });

  it('home should have a nav link to the batters screen', () => {
    const wrapper = shallow(<Home history={browserHistory} batters={jest.fn()} pitchers={jest.fn()} />)

    expect(wrapper.find('.batters-link').props().children).toEqual('Batters')
  });
});
