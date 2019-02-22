import {combineReducers} from 'redux'

import alert from './alert'
import entities from './entities'
import login from './login'
import signup from './signup'
import users from './users'


const mainReducer = combineReducers({
  alert,
  login,
  signup,
  entities,
  users,
})

export default mainReducer
