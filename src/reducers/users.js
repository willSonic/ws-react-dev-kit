import * as ActionTypes from 'actions/ActionTypes'
import * as models from 'models'
import {normalize} from 'normalizr'


const initialState = {
  fetching: true,
  result: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_USER__REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case ActionTypes.LIST_USER__SUCCESS: {
      const {result} = normalize(action.data.users, [models.user])
      
      return {
        ...state,
        fetching: false,
        result,
        error: null,
      }
    }
    case ActionTypes.LIST_USER__FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    case ActionTypes.LOGOUT__SUCCESS:
      return initialState
    default:
      return state
  }
}
