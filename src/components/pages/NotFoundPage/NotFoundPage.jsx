// import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography/Typography'
import React from 'react'


class NotFoundPage extends React.PureComponent {
  render () {
    return (
      <div>
        <Typography
          variant="h1"
          noWrap
          align="center"
        >
          Not Found
        </Typography>
      </div>
    )
  }
}

NotFoundPage.propTypes = {}

export default NotFoundPage
