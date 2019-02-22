// import {createSelector} from 'reselect'

export const getFetching = state => state.login.fetching
export const getError = state => state.login.error
export const getIsLoggedIn = state => state.login.loggedIn
export const getEmail = state => state.login.email
