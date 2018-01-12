import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import  thunk from 'redux-thunk';
import allReducers from './reducers/allReducers'

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(allReducers, middleware)

store.subscribe(() => {
  console.log('log', store.getState())
})

export default store