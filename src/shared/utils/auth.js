import firebase from 'firebase/app';

export function signInWithFacebook() {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(providerFacebook);
}
