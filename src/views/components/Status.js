import React from 'react'
import { connect } from 'react-redux'
import { transactionSelectors } from '../../state/ducks/transactions'

const Status = props => (
  <p className="status">Current Balance: {props.currentBalance}</p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    currentBalance: transactionSelectors.getCurrentBalance(state)
  }
}

export default connect(mapStateToProps)(Status)
