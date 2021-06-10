import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjLKtynybSrDVV_qPzWyesk2OYGCuHc8k",
  authDomain: "linkedin-clone-react-392e2.firebaseapp.com",
  projectId: "linkedin-clone-react-392e2",
  storageBucket: "linkedin-clone-react-392e2.appspot.com",
  messagingSenderId: "415532741202",
  appId: "1:415532741202:web:753660f6ae5d38db94e58b",
  measurementId: "G-GF31N4ECQM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

firebase.analytics();

export { auth, db, provider, storage };
