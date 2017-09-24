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

export default {
  addDeposit,
  addExpense
}
