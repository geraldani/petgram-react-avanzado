import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

function render () {
  ReactDOM.render(<App />, document.getElementById('app'))
}

render()

if (module.hot) {
  module.hot.accept('./App', () => { render() })
}
