import types from './types'

export const addDeposit = amount => {
  return {
    type: types.ADD_DEPOSIT,
    amount: amount
  }
}

export const addExpense = () => {}

export default {
  addDeposit,
  addExpense
}
