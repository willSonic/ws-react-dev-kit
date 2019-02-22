import * as alertActions from 'actions/alert'
import * as ActionTypes from 'actions/ActionTypes'
import * as accountApi from 'api/account'


export const login = (email, password) => {
  const request = (email) => ({
    type: ActionTypes.LOGIN__REQUEST,
    email,
  })
  
  const success = (email) => ({
    type: ActionTypes.LOGIN__SUCCESS,
    email,
  })
  
  const failure = (error) => ({
    type: ActionTypes.LOGIN__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request(email))
    
    let responseObject = null
    
    try {
      const response = await accountApi.login(email, password)
      
      responseObject = response.data
      
      localStorage.setItem('email', email)
      await dispatch(success(email))
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}

export const register = (email, password) => {
  const request = (email) => ({
    type: ActionTypes.SIGNUP__REQUEST,
    email,
  })
  
  const success = () => ({
    type: ActionTypes.SIGNUP__SUCCESS,
  })
  
  const failure = (error) => ({
    type: ActionTypes.SIGNUP__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request(email))
    
    let responseObject = null
    
    try {
      const response = await accountApi.register(email, password)
      
      responseObject = response.data
      
      await dispatch(success())
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}

export const confirmEmail = (email, code) => {
  const request = (email) => ({
    type: ActionTypes.EMAIL_CONFIRMATION__REQUEST,
    email,
  })
  
  const success = () => ({
    type: ActionTypes.EMAIL_CONFIRMATION__SUCCESS,
    email,
  })
  
  const failure = (error) => ({
    type: ActionTypes.EMAIL_CONFIRMATION__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request(email))
    
    let responseObject = null
    
    try {
      const response = await accountApi.activate(email, code)
      
      responseObject = response.data
      
      localStorage.setItem('email', email)
      
      await dispatch(success())
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}

export const recoverPassword = (email) => {
  const request = (email) => ({
    type: ActionTypes.RECOVER_PASSWORD__REQUEST,
    email,
  })
  
  const success = () => ({
    type: ActionTypes.RECOVER_PASSWORD__SUCCESS,
    email,
  })
  
  const failure = (error) => ({
    type: ActionTypes.RECOVER_PASSWORD__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request(email))
    
    let responseObject = null
    
    try {
      const response = await accountApi.recoverPassword(email)
      
      responseObject = response.data
      
      await dispatch(success())
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}

export const resetPassword = (email, token, password) => {
  const request = (email) => ({
    type: ActionTypes.RESET_PASSWORD__REQUEST,
    email,
  })
  
  const success = () => ({
    type: ActionTypes.RESET_PASSWORD__SUCCESS,
    email,
  })
  
  const failure = (error) => ({
    type: ActionTypes.RESET_PASSWORD__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request(email))
    
    let responseObject = null
    
    try {
      const response = await accountApi.resetPassword(email, token, password)
      
      responseObject = response.data
      
      await dispatch(success())
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}

export const logout = () => {
  const request = () => ({
    type: ActionTypes.LOGOUT__REQUEST,
  })
  
  const success = () => ({
    type: ActionTypes.LOGOUT__SUCCESS,
  })
  
  const failure = (error) => ({
    type: ActionTypes.LOGOUT__FAILURE,
    error,
  })
  
  return async (dispatch) => {
    await dispatch(request())
    
    let responseObject = null
    
    try {
      const response = await accountApi.logout()
      
      responseObject = response.data
      
      localStorage.removeItem('email')
      await dispatch(success())
    } catch (error) {
      await dispatch(failure(error))
      await dispatch(alertActions.error(error))
    }
    
    return responseObject
  }
}
