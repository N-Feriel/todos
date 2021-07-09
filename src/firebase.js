import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todos-app-3bb89.firebaseapp.com",
  projectId: "todos-app-3bb89",
  storageBucket: "todos-app-3bb89.appspot.com",
  messagingSenderId: "730570966296",
  appId: "1:730570966296:web:3264aee604fe5cb2c14a6d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
