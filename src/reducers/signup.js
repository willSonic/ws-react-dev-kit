import * as ActionTypes from 'actions/ActionTypes'


const initialState = {
  fetching: false,
  registered: false,
  activated: false, // email confirmation status, should be used only at email confirmation page
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGNUP__REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case ActionTypes.SIGNUP__SUCCESS:
      return {
        ...state,
        fetching: false,
        registered: true,
        error: null,
      }
    case ActionTypes.SIGNUP__FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    case ActionTypes.EMAIL_CONFIRMATION__SUCCESS:
      return {
        ...state,
        activated: true,
      }
    case ActionTypes.EMAIL_CONFIRMATION__FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case ActionTypes.LOGOUT__SUCCESS:
      return initialState
    default:
      return state
  }
}
