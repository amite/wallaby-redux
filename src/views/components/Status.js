import React from 'react'
import { connect } from 'react-redux'
import { transactionSelectors } from '../../state/ducks/transactions'

const Status = ({ currentBalance }) => (
  <p className="status">Current Balance: {currentBalance}</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    currentBalance: transactionSelectors.getCurrentBalance(state)
  }
}

export default connect(mapStateToProps)(Status)
