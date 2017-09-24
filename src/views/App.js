import React, { Component } from 'react'
import Status from './components/Status'
import wallet from './img/wallet.png'
import { connect } from 'react-redux'
import { addDeposit } from '../state/ducks/transactions/actions'

class App extends Component {
  handleAddDeposit = () => {
    this.props.dispatch(addDeposit(3000))
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
          <button className="withdraw">Add Expense</button>
        </div>
      </div>
    )
  }
}

export default connect()(App)
