import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage'
import React from 'react'
// import PropTypes from 'prop-types'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'


class PageRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

PageRouter.propTypes = {}

export default PageRouter
