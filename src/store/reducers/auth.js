import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  isLoading: false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, isLoading: true })
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    isLoading: false
  })
};

const authFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    isLoading: false
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAILED: return authFailed(state, action);
    default: return state;
  }
}

export default reducer;
