import * as ActionTypes from 'actions/ActionTypes'


const initialState = {
  success: null,
  info: null,
  warn: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ALERT__SUCCESS:
      return {
        ...state,
        success: {
          message: action.message,
        },
      }
    case ActionTypes.ALERT__INFORMATION:
      return {
        ...state,
        info: {
          message: action.message,
        },
      }
    case ActionTypes.ALERT__WARNING:
      return {
        ...state,
        warn: {
          message: action.message,
        },
      }
    case ActionTypes.ALERT__FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case ActionTypes.ALERT__CLEAR:
      return initialState
    default:
      return state
  }
}
