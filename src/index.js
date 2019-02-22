import axios from 'axios'
import 'components/index.sass'
import Root from 'components/Root'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from 'store'


axios.defaults.baseURL = process.env.REACT_APP_HOST_API

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
)
