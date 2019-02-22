import axios from 'axios'


export const login = (email, password) => {
  return axios.post(`/api/auth/login`, {
    email,
    password,
  })
}

export const register = (email, password) => {
  return axios.post(`/api/auth/register`, {
    email,
    password,
  })
}

export const activate = (email, code) => {
  return axios.post(`/api/auth/activate`, {
    email,
    code,
  })
}

export const recoverPassword = (email) => {
  return axios.post(`/api/auth/forgot`, {
    email,
  })
}

export const resetPassword = (email, key, password) => {
  return axios.post(`/api/auth/recover`, {
    email,
    key,
    password,
  })
}

export const logout = () => {
  return axios.get(`/api/auth/logout`)
}
