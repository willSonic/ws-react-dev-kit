import * as ActionTypes from 'actions/ActionTypes'


const email = localStorage.getItem('email')

const initialState = {
  fetching: false,
  loggedIn: !!email,
  email,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN__REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case ActionTypes.LOGIN__SUCCESS:
    case ActionTypes.EMAIL_CONFIRMATION__SUCCESS:
      return {
        ...state,
        fetching: false,
        loggedIn: true,
        email: action.email,
        error: null,
      }
    case ActionTypes.LOGIN__FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    case ActionTypes.LOGOUT__REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case ActionTypes.LOGOUT__SUCCESS:
      return {
        ...initialState,
        loggedIn: false,
        email: null,
      }
    case ActionTypes.LOGOUT__FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
