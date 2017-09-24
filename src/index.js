import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/App'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './state/store'

const reduxStore = configureStore()

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
