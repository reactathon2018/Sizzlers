import ajax from '../ajax';
import { createAction } from '../redux_utils'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const loginRequest = createAction(LOGIN_REQUEST, 'loginRequestLoading')
export const loginSuccess = createAction(LOGIN_REQUEST_SUCCESS, 'loginStatus', 'username')
export const loginFailure = createAction(LOGIN_REQUEST_FAILURE, 'errors')

let api_user_input = {"query": "query{ allusers(first:1){ id,email,goldBadge,silverBadge,bronzeBadge,name,achievements{event{eventName}},skills{skillName},totalExp,companies,college}}"}

export function login(data) {
  return dispatch => {
    dispatch(loginRequest())
    return ajax.post(`/`, api_user_input)
      .then(res => {
        console.log("users===>",res)
         dispatch(loginSuccess(res.data.data.allusers[0], res.data.data.allusers[0].id)) })
      .catch(errors => dispatch(loginFailure(errors)))
  }
}

export const LOG_OUT_USER = 'LOG_OUT_USER'
export function logOutUser() {
  return { type: LOG_OUT_USER }
}