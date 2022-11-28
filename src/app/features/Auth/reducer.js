import { USER_LOGIN, USER_LOGOUT } from './constants'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  storage
}

const initialState = persistReducer(persistConfig) ? persistReducer(persistConfig) : { user: null, token: null }

export default function authReducer (state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN:
      return { user: payload.user, token: payload.token }
    case USER_LOGOUT:
      return { user: null, token: null }
    default:
      return state
  }
}