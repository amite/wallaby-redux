import * as fromTransaction from './reducers'

const getCurrentBalance = state => {
  return fromTransaction.getCurrentBalance(state)
}

export const getCurrentNotificationState = state => {
  return fromTransaction.getCurrentNotificationState(state)
}

export const getCurrentNotificationMessage = state => {
  return fromTransaction.getCurrentNotificationMessage(state)
}

export const getAllTransactions = state => {
  return fromTransaction.getAllTransactions(state)
}

export default {
  getCurrentBalance,
  getCurrentNotificationState,
  getCurrentNotificationMessage,
  getAllTransactions
}
