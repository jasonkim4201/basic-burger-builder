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

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
      setTimeout(() => {
        dispatch(logout());    
      }, expirationTime * 1000);
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
          // console.log(response); 
          // this is now i get the info when session will expire
          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000); // its in millisecs so * 1000
          // accessing local storage
          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem("expirationDate", expirationDate);
          localStorage.setItem("userId", response.data.localId);
          
          dispatch(authSuccess(response.data.idToken, response.data.localId));
          dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(error => {
          // failures => this way
          // console.log(error);
          dispatch(authFailed(error.response.data.error));
        });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
      }; // get time gives time in milliseconds
    };
  };
} 