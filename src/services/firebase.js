import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQ_ZkJp4psTGgga4Wl-D6VmunSQ053tsk",
  authDomain: "recordingmechanic.firebaseapp.com",
  databaseURL: "https://recordingmechanic.firebaseio.com",
  projectId: "recordingmechanic",
  storageBucket: "recordingmechanic.appspot.com",
  messagingSenderId: "882960539505",
  appId: "1:882960539505:web:e64c497c539b619496e0d0"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.firestore();
