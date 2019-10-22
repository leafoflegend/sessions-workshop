import { postFetch } from './utils.js';

const CHANGE_FORM_FIELD = Symbol('CHANGE_FORM_FIELD');
const SET_LOGIN_ERROR = Symbol('SET_LOGIN_ERROR');
const SET_LOGIN_SUCCESS = Symbol('SET_LOGIN_SUCCESS');

const changeFormField = (field, value) => ({
  type: CHANGE_FORM_FIELD,
  field,
  value,
});

const setLoginError = err => ({
  type: SET_LOGIN_ERROR,
  err,
});

const setLoginSuccess = user => ({
  type: SET_LOGIN_SUCCESS,
  user,
});

const onLogin = (dispatch, getState) => {
  const { username, password } = getState();

  return postFetch('/api/login', {
    username,
    password,
  })
    .then(response => {
      window.history.pushState({}, 'User', '/user');
      console.log('Response: ', response);
      return dispatch(setLoginSuccess(response.data));
    })
    .catch(e => {
      return dispatch(setLoginError(e));
    })
};

export {
  CHANGE_FORM_FIELD,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  changeFormField,
  setLoginError,
  setLoginSuccess,
  onLogin,
}
