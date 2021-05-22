import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARxtIAEMEYhtGLwvDPynVgjPywCGAIsOc",
  authDomain: "fir-lesson-85bc3.firebaseapp.com",
  projectId: "fir-lesson-85bc3",
  storageBucket: "fir-lesson-85bc3.appspot.com",
  messagingSenderId: "1040830306636",
  appId: "1:1040830306636:web:36ad0f18589ca5b11c97e9",
};

if (!firebase.apps.length) {
  //initializeが何度も行われてエラーが出るときはこれ
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export { firebase };
