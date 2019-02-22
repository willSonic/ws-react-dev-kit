import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'
import withRouter from 'react-router-dom/withRouter'
import * as selectors from 'selectors/login'


class PrivateRoute extends React.Component {
  render () {
    const {
      component: Component,
      loginPath = `/login`,
      loggedIn,
      ...other
    } = this.props
    
    return (
      <Route
        {...other}
        render={props => (
          loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: loginPath,
                state: {from: props.location},
              }}
            />
          )
        )}
      />
    )
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loginPath: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  loggedIn: selectors.getIsLoggedIn(state),
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
