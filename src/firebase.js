import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlCo0kaIqVjTnG_OXBvBicUlMVnriha7E",
  authDomain: "todos-397ff.firebaseapp.com",
  projectId: "todos-397ff",
  storageBucket: "todos-397ff.appspot.com",
  messagingSenderId: "776890743614",
  appId: "1:776890743614:web:de1c6c9be94338bdd44a6f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
