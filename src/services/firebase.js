import firebase from "firebase";

const firebaseConfig = {
/*** COPY CONFIG FROM PROJECT SETTINGS***/
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.firestore();
