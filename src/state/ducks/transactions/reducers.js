import { combineReducers } from 'redux'
import types from './types'
import { DEFAULT_BALANCE } from './constants'

/* State shape
state: {
  transactions: [],
  currentBalance: 2300
}
*/

const transactionsReducer = (state = [], action) => {
  return state
}

const currentBalanceReducer = (state = DEFAULT_BALANCE, action) => {
  switch (action.type) {
    case types.ADD_DEPOSIT:
      return state + action.amount
    case types.ADD_EXPENSE:
      return state - action.amount
    default:
      return state
  }
}

const reducer = combineReducers({
  transactions: transactionsReducer,
  currentBalance: currentBalanceReducer
})

export const getCurrentBalance = state => {
  return state.transactions.currentBalance
}

export default reducer
