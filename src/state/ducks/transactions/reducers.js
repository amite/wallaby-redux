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

const notificationsReducer = (
  state = { isActive: false, message: '' },
  action
) => {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return {
        ...state,
        isActive: true,
        message: action.message
      }

    case types.CLOSE_NOTIFICATION:
      return {
        ...state,
        isActive: false
      }

    default:
      return state
  }
}

const reducer = combineReducers({
  transactions: transactionsReducer,
  currentBalance: currentBalanceReducer,
  notifications: notificationsReducer
})

export const getCurrentBalance = state => {
  return state.transactions.currentBalance
}

export const getCurrentNotificationState = state => {
  return state.transactions.notifications.isActive
}

export const getCurrentNotificationMessage = state => {
  return state.transactions.notifications.message
}

export default reducer
