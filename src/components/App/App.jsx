import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Alert from 'components/popups/Alert/Alert'
import React from 'react'
import PageRouter from 'routers/PageRouter'
import * as themes from 'themes'


class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider theme={themes.light}>
        <CssBaseline />
        <PageRouter />
        <Alert />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {}

export default App
