import React, { Component } from 'react'
import Status from './components/Status'
import wallet from './img/wallet.png'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="paper">
          <header>
            <img src={wallet} alt="Wallet" id="logo" />
            <h1 className="title">Wallaby</h1>
          </header>
          <Status />
          <button className="deposit">Add Deposit</button>
          <button className="withdraw">Add Expense</button>
        </div>
      </div>
    )
  }
}

export default App
