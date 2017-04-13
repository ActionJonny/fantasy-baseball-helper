import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { pitchers } from './getPitchersReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  pitchers
})

export default rootReducer
