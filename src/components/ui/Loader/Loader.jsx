import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Typography from '@material-ui/core/Typography/Typography'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Loader.sass'


class Loader extends React.PureComponent {
  render () {
    const {
      className,
    } = this.props
    
    return (
      <div className={classNames('Loader', className)}>
        <Typography
          gutterBottom
        >
          Loading...
        </Typography>
        <div className="Progress">
          <CircularProgress color="secondary" />
        </div>
      </div>
    )
  }
}

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
