import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ENDPOINTS } from './Constrants/Constantes'

const client = new ApolloClient({
  uri: ENDPOINTS.graphql
})

function render () {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app'))
}

render()

if (module.hot) {
  module.hot.accept('./App', render)
}
