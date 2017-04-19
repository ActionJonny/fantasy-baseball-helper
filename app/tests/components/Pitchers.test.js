import React from 'react'
import { shallow } from 'enzyme'
import { browserHistory } from 'react-router'

import Pitchers from '../../components/Pitchers/Pitchers';
import pitcherData from '../../data/pitchers.js'

describe('Pitchers', () => {

  it('Pitchers should have a table', () => {
    const wrapper = shallow(<Pitchers history={browserHistory} pitchers={jest.fn()} />)

    expect(wrapper.find('table').length).toEqual(1);
  });

  it('Pitchers should have td with the length of 11 stats', () => {
    const wrapper = shallow(<Pitchers history={browserHistory} pitchers={jest.fn()} />);

    expect(wrapper.find('td').length).toEqual(13)
  });

  it('Pitchers should have a nav link to the home screen', () => {
    const wrapper = shallow(<Pitchers history={browserHistory} pitchers={jest.fn()} />);

    expect(wrapper.find('.home').props().to).toEqual('/')
  });

  it('Pitchers should have a nav link to the home screen', () => {
    const wrapper = shallow(<Pitchers history={browserHistory} pitchers={jest.fn()} />);

    expect(wrapper.find('.home').props().children).toEqual('Home Page')
  });
});
