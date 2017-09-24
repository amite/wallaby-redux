import types from './types'
import constants from './constants'

export const addDeposit = () => {
  return {
    type: types.ADD_DEPOSIT,
    amount: constants.DEFAULT_BALANCE
  }
}

export const addExpense = () => {}

export default {
  addDeposit,
  addExpense
}
