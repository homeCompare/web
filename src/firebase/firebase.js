import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2LDk0lqFc2zMYOKpl8e9IYyrHTzduA6g',
  authDomain: 'homecompare-f113f.firebaseapp.com',
  databaseURL: 'https://homecompare-f113f.firebaseio.com',
  projectId: 'homecompare-f113f',
  storageBucket: 'homecompare-f113f.appspot.com',
  messagingSenderId: '263005951614',
  appId: '1:263005951614:web:2fd642ea154e217c80aa2f',
  measurementId: 'G-MPVFYVW0PN',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(providerGoogle);
}

export function signInWithFacebook() {
  return firebase.auth().signInWithPopup(providerFacebook);
}

export function signOut() {
  return firebase.auth().signOut();
}
