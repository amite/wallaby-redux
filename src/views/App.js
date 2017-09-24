import React, { Component } from 'react'
import Status from './components/Status'
import wallet from './img/wallet.png'
import { connect } from 'react-redux'
import {
  addDeposit,
  addExpense,
  addNotification
} from '../state/ducks/transactions/actions'
import { transactionSelectors } from '../state/ducks/transactions'

import {
  DEFAULT_DEPOSIT_AMOUNT,
  DEFAULT_SPEND_AMOUNT
} from '../state/ducks/transactions/constants'
import { bindActionCreators } from 'redux'

class App extends Component {
  handleAddDeposit = () => {
    this.props.addDeposit(DEFAULT_DEPOSIT_AMOUNT)
  }

  handleExpense = () => {
    const { currentBalance, addExpense } = this.props
    if (currentBalance > DEFAULT_SPEND_AMOUNT) {
      this.props.addExpense(DEFAULT_SPEND_AMOUNT)
    } else {
      console.log('insufficient balance')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="paper">
          <header>
            <img src={wallet} alt="Wallet" id="logo" />
            <h1 className="title">Wallaby</h1>
          </header>
          <Status />
          <button onClick={this.handleAddDeposit} className="deposit">
            Add Deposit
          </button>
          <button onClick={this.handleExpense} className="withdraw">
            Add Expense
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentBalance: transactionSelectors.getCurrentBalance(state)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addDeposit, addExpense }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
