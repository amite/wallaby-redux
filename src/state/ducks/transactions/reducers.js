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
  // console.log('initial state:', state)
  switch (action) {
    case types.ADD_DEPOSIT:
      return {
        ...state,
        currentBalance: state + action.amount
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  transactions: transactionsReducer,
  currentBalance: currentBalanceReducer
})

export const getCurrentBalance = state => {
  console.log(state)

  return state.transactions.currentBalance
}

export default reducer
