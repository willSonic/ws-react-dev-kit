import PropTypes from 'prop-types'


export const routerLocationType = PropTypes.shape({
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.shape({}),
})

export const routerHistoryType = PropTypes.shape({
  length: PropTypes.number,
  action: PropTypes.string,
  location: routerLocationType.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  block: PropTypes.func.isRequired,
})

export const routerMatchType = PropTypes.shape({
  params: PropTypes.shape({}).isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

export const errorType = PropTypes.shape({
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
})
