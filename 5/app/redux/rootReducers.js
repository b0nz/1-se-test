import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import nav from './nav'
import paymentReducer from '../payment/reducers'

const appReducer = combineReducers({
  nav,
  form,
  paymentReducer,
})

export default appReducer
