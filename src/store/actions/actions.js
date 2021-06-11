import { auth, provider, storage, db } from "../../firebase";
import { SET_USER } from "./actionType";

const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function getUserAuthAPI() {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let tmpUser = { ...user };
        getBioAPI(user.uid)
          .then((data) => {
            if (data) {
              tmpUser = {
                ...user,
                bio: data.bio,
                designation: data.designation,
              };
            }
            dispatch(setUser(tmpUser));
          })
          .catch(() => {});
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
        if (error.code === "auth/email-already-in-use") {
          alert("The entered email already exist");
        }
      });
  };
}

export function signInWithEmailAPI(email, password) {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((payload) => {
        let tmpUser = { ...payload.user };
        getBioAPI(payload.user.uid)
          .then((data) => {
            if (data) {
              tmpUser = {
                ...tmpUser,
                bio: data.bio,
                designation: data.designation,
              };
            }
            dispatch(setUser(tmpUser));
          })
          .catch(() => {});
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert(
            "An account with the email address does not exist, try creating an account."
          );
        } else {
          alert("Invalid Credentials");
        }
      });
  };
}

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

export function uploadUserImageAPI(file, uid) {
  return (dispatch) => {
    storage
      .ref()
      .child(`user-image/${uid}.jpeg`)
      .putString(file, "data_url")
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          auth.onAuthStateChanged((user) => {
            if (user) {
              console.log(url);
              user.updateProfile({ photoURL: url });
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function setMetaAPI(uid, name, bio, designation) {
  return (dispatch) => {
    console.log(name, bio, designation);
    db.collection("user-bio")
      .doc(uid)
      .set({ bio: bio, designation: designation });
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({ displayName: name });
        console.log("dispached", {
          ...user,
          bio: bio,
          designation: designation,
        });
        dispatch(setUser({ ...user, bio: bio, designation: designation }));
      }
    });
  };
}

function getBioAPI(uid) {
  return new Promise((resolve) => {
    db.collection("user-bio")
      .doc(uid)
      .get()
      .then((doc) => {
        resolve(doc.data());
      });
  });
}
