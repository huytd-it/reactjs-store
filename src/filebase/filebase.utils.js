import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7axF9k-WNtoR3BxbSUbkFjvlL7A2V-TM",
  authDomain: "quickstart-1616377204957.firebaseapp.com",
  projectId: "quickstart-1616377204957",
  storageBucket: "quickstart-1616377204957.appspot.com",
  messagingSenderId: "56529370715",
  appId: "1:56529370715:web:2c3fcfcca4d70fe9abc97e",
  measurementId: "G-S867H3G5NW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
