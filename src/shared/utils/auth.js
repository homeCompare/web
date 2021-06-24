import firebase from 'firebase/app';
import {omit} from 'lodash';

const signInWithFacebook = () => {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(providerFacebook);
};

const signInWithGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle);
};

export const facebookLogin = async () => {
  const facebookRes = await signInWithFacebook();
  const userToken = await firebase.auth().currentUser.getIdToken();
  const userData = {
    ...omit(facebookRes.additionalUserInfo.profile, ['granted_scopes', 'id']),
    id: facebookRes.user.uid, // user auth uid.
  };
  userData.userToken = userToken;
  return userData;
};

export const googleLogin = async () => {
  const googleRes = await signInWithGoogle();
  const userToken = await firebase.auth().currentUser.getIdToken();
  const userData = {
    ...omit(googleRes.additionalUserInfo.profile, ['granted_scopes', 'id']),
    id: googleRes.user.uid, // user auth uid.
  };
  userData.userToken = userToken;
  return userData;
};
