import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFAGfn_P-KnUM0kFjOGpO_frqpeAb8Mqc",
  authDomain: "nwitter-84d14.firebaseapp.com",
  projectId: "nwitter-84d14",
  storageBucket: "nwitter-84d14.appspot.com",
  messagingSenderId: "1055314571616",
  appId: "1:1055314571616:web:e18c1b95a14f590c26ee05",
};

export default firebase.initializeApp(firebaseConfig);
