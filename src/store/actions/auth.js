import * as actionTypes from "./actionTypes";
import axios from "axios";

// create action creators
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error
  };  
};

// make action type that will hold async code that takes the email and pass as args
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart()); 
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBkXrE0KP6pxhKiQYZChVq4n3WdtaCNegk";
    if (!isSignUp) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBkXrE0KP6pxhKiQYZChVq4n3WdtaCNegk`
    }

    axios.post(url, authData)
        .then(response => {
          // successful auths here
          console.log(url);
          console.log(response);
          dispatch(authSuccess(response.data.idToken, response.data.localId))
        })
        .catch(error => {
          // failures => this way
          console.log(error);
          dispatch(authFailed(error.response.data.error));
        });
  };
};