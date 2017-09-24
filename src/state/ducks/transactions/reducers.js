import { combineReducers } from 'redux'
import types from './types'
import DEFAULT_BALANCE from './constants'

/* State shape
state: {
  transactions: [],
  currentBalance: 2300
}
*/

const transactionsReducer = (state = []) => {
  return state
}

const currentBalanceReducer = (state = DEFAULT_BALANCE) => {
  return state.DEFAULT_BALANCE
}

const reducer = combineReducers({
  transactions: transactionsReducer,
  currentBalance: currentBalanceReducer
})

export const getCurrentBalance = ({ transactions }) => {
  return transactions.currentBalance
}

export default reducer
