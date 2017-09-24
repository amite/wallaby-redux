import types from './types'
import moment from 'moment'
import faker from 'faker'

export const addDeposit = (amount, currentBalance) => {
  return {
    type: types.ADD_DEPOSIT,
    amount,
    note: faker.lorem.words(3),
    date: moment(),
    balance: currentBalance
  }
}

export const addExpense = amount => {
  return {
    type: types.ADD_EXPENSE,
    amount,
    date: moment()
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
