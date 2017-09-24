import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { transactionSelectors } from '../../state/ducks/transactions'

class Transactions extends Component {
  render() {
    const { transactions } = this.props
    return (
      <div>
        <table>
          <caption>Statement Summary</caption>
          <thead>
            <tr>
              <th scope="col">Amount</th>
              <th scope="col">Note</th>
              <th scope="col">Type</th>
              <th scope="col">Balance</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td data-label="Amount">{transaction.amount}</td>
                <td data-label="Due Date">{transaction.note}</td>
                <td data-label="Type">{transaction.type}</td>
                <td data-label="Balance">{transaction.balance}</td>
                <td data-label="Date">
                  {moment(transaction.date).format('Do MMM | h:mm a')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    transactions: transactionSelectors.getAllTransactions(state)
  }
}

export default connect(mapStateToProps)(Transactions)
