import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAb5jf3Tl2cRVaUH8fVlrIUos7ChebyGT4",
  authDomain: "auth-5ece4.firebaseapp.com",
  projectId: "auth-5ece4",
  storageBucket: "auth-5ece4.appspot.com",
  messagingSenderId: "117617423172",
  appId: "1:117617423172:web:050307bf9fc1de6279dd11",
  measurementId: "G-96JD0YC7MS",
});

export const auth = app.auth();

export default app;
