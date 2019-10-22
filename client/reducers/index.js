import {
  CHANGE_FORM_FIELD,
  SET_LOGIN_ERROR,
  SET_LOGIN_SUCCESS,
} from '../actions/index.js';

const initialState = {
  username: '',
  password: '',
  user: null,
  err: null,
};

const rootReducer = (state = initialState, action) => {
  if (typeof action !== 'object' || !action.type) return state;

  switch (action.type) {
    case CHANGE_FORM_FIELD:
      if (state.hasOwnProperty(action.field)) {
        return {
          ...state,
          err: null,
          [action.field]: action.value,
        };
      } else return state;
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        username: '',
        password: '',
        err: null,
        user: action.user,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        username: '',
        password: '',
        user: null,
        err: action.err,
      };
    default:
      return state;
  }
};

export default rootReducer;
