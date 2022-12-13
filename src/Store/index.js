import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import auth from './user'

const reducer = combineReducers({
  auth,
})

const store = configureStore({ reducer })

export default store