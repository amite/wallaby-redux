import * as fromTransaction from './reducers'

const getCurrentBalance = state => {
  return fromTransaction.getCurrentBalance(state)
}

export default {
  getCurrentBalance
}
