import App from 'components/App/App'
import React from 'react'
import {hot} from 'react-hot-loader'
import BrowserRouter from 'react-router-dom/BrowserRouter'


class Root extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

Root.propTypes = {}

export default hot(module)(Root)
