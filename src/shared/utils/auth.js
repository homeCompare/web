import firebase from 'firebase/app';

const providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithFacebook() {
  return firebase.auth().signInWithPopup(providerFacebook);
}
