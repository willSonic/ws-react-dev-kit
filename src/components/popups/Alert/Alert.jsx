import Snackbar from '@material-ui/core/Snackbar/Snackbar'
import AlertContent from 'components/popups/Alert/AlertContent/AlertContent'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as alertSelectors from 'selectors/alert'


class Alert extends React.PureComponent {
  constructor (props) {
    super(props)
    
    this.state = {
      openError: false,
      openWarn: false,
      openInfo: false,
      openSuccess: false,
      lastError: null,
      lastWarn: null,
      lastInfo: null,
      lastSuccess: null,
    }
  
    this.handleCloseError = this.handleCloseError.bind(this)
    this.handleCloseWarn = this.handleCloseWarn.bind(this)
    this.handleCloseInfo = this.handleCloseInfo.bind(this)
    this.handleCloseSuccess = this.handleCloseSuccess.bind(this)
  }
  
  static getDerivedStateFromProps (props, state) {
    const {
      error,
      warn,
      info,
      success,
    } = props
    
    const {
      lastError,
      lastWarn,
      lastInfo,
      lastSuccess,
    } = state
    
    let result = null
    
    if (error !== lastError) {
      result = {
        ...result,
        openError: !!error,
        lastError: error,
      }
    }
    
    if (warn !== lastWarn) {
      result = {
        ...result,
        openWarn: !!warn,
        lastWarn: warn,
      }
    }
    
    if (info !== lastInfo) {
      result = {
        ...result,
        openInfo: !!info,
        lastInfo: info,
      }
    }
    
    if (success !== lastSuccess) {
      result = {
        ...result,
        openSuccess: !!success,
        lastSuccess: success,
      }
    }
    
    return result
  }
  
  handleCloseError (event, reason) {
    if (reason === 'clickaway') {
      return
    }
    
    this.setState({
      openError: false,
    })
  }
  
  handleCloseWarn (event, reason) {
    if (reason === 'clickaway') {
      return
    }
    
    this.setState({
      openWarn: false,
    })
  }
  
  handleCloseInfo (event, reason) {
    if (reason === 'clickaway') {
      return
    }
    
    this.setState({
      openInfo: false,
    })
  }
  
  handleCloseSuccess (event, reason) {
    if (reason === 'clickaway') {
      return
    }
    
    this.setState({
      openSuccess: false,
    })
  }
  
  render () {
    const {
      openError,
      openWarn,
      openInfo,
      openSuccess,
    } = this.state
    
    const {
      error,
      warn,
      info,
      success,
    } = this.props
    
    return (
      <React.Fragment>
        <Snackbar
          key={`error-${Date.now()}`}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={this.handleCloseError}
        >
          <AlertContent
            variant="error"
            message={error ? error.message : ''}
            onClose={this.handleCloseError}
          />
        </Snackbar>
        <Snackbar
          key={`warn-${Date.now()}`}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openWarn}
          autoHideDuration={6000}
          onClose={this.handleCloseWarn}
        >
          <AlertContent
            variant="warning"
            message={warn ? warn.message : ''}
            onClose={this.handleCloseWarn}
          />
        </Snackbar>
        <Snackbar
          key={`info-${Date.now()}`}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={openInfo}
          autoHideDuration={6000}
          onClose={this.handleCloseInfo}
        >
          <AlertContent
            variant="info"
            message={info ? info.message : ''}
            onClose={this.handleCloseInfo}
          />
        </Snackbar>
        <Snackbar
          key={`success-${Date.now()}`}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={openSuccess}
          autoHideDuration={6000}
          onClose={this.handleCloseSuccess}
        >
          <AlertContent
            variant="success"
            message={success ? success.message : ''}
            onClose={this.handleCloseSuccess}
          />
        </Snackbar>
      </React.Fragment>
    )
  }
}

Alert.propTypes = {
  error: PropTypes.shape({message: PropTypes.string.isRequired}),
  warn: PropTypes.shape({message: PropTypes.string.isRequired}),
  info: PropTypes.shape({message: PropTypes.string.isRequired}),
  success: PropTypes.shape({message: PropTypes.string.isRequired}),
}

const mapStateToProps = state => ({
  error: alertSelectors.getError(state),
  warn: alertSelectors.getWarn(state),
  info: alertSelectors.getInfo(state),
  success: alertSelectors.getSuccess(state),
})

export default connect(mapStateToProps)(Alert)
