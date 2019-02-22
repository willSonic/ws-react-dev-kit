import * as ActionTypes from 'actions/ActionTypes'
import * as models from 'models'
import {normalize} from 'normalizr'
import merge from 'lodash/merge'


const initialState = {
  users: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_USER__SUCCESS: {
      const {entities} = normalize(
        action.data,
        {
          users: [models.user],
        },
      )
      
      return merge({}, state, entities)
    }
    case ActionTypes.LOGOUT__SUCCESS:
      return initialState
    default:
      return state
  }
}
