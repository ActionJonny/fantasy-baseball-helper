import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// import css

import App from './components/App/App';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory();

const middleware = [routerMiddleware(history), thunk] //logger

const store = createStore(rootReducer, devTools, applyMiddleware(...middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route to="/" component={App}/>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))