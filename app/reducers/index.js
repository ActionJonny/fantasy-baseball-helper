import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { pitchers } from './getPitchersReducer'
import { batters } from './getBattersReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  pitchers,
  batters
})

export default rootReducer
