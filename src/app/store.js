import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import authReducer from './features/Auth/reducer'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
  auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)