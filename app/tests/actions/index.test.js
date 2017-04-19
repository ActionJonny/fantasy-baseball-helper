import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/index.js'


const store = configureMockStore()()

import pitcherData from '../../data/pitchers.js'
import batterData from '../../data/batters.js'

describe('actions', () => {

  it('getPitchers', () => {
  let expectedAction = {type: 'GET_PITCHERS', pitchers: pitcherData}

  store.dispatch(actions.getPitchers(pitcherData))
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(1)
  expect(createdAction[0]).toEqual(expectedAction)
  })

  it.skip('getBatters', () => {
  let expectedAction = {type: 'GET_BATTERS', batters: batterData}

  store.dispatch(actions.getBatters(batterData))
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(1)
  expect(createdAction[1]).toEqual(expectedAction)
  })

})
