import { auth, provider } from "../../firebase";
import { EMAIL_ALREADY_EXIST } from "../errors";
import { SET_ERROR, SET_USER } from "./actionType";

const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

const setError = (payload) => ({
  type: SET_ERROR,
  error: payload,
});

export function getUserAuthAPI() {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function createUserWithEmailAndPasswordAPI(email, password) {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          dispatch(setError(EMAIL_ALREADY_EXIST));
        }
      });
  };
}

export function signInWithEmailAPI(email, password) {}

export function signInWithGoogleAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
