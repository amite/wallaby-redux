import types from './types'

export const addDeposit = amount => {
  return {
    type: types.ADD_DEPOSIT,
    amount
  }
}

export const addExpense = amount => {
  return {
    type: types.ADD_EXPENSE,
    amount
  }
}

export const addNotification = message => {
  return {
    type: types.ADD_NOTIFICATION,
    message
  }
}

export const closeNotification = () => {
  return {
    type: types.CLOSE_NOTIFICATION
  }
}

export default {
  addDeposit,
  addExpense
}
