import firebase from 'firebase/app';
import {omit} from 'lodash';

const signInWithFacebook = () => {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(providerFacebook);
};

export const facebookLogIn = async () => {
  const facebookRes = await signInWithFacebook();
  const userToken = await firebase.auth().currentUser.getIdToken();
  const userData = {
    ...omit(facebookRes.additionalUserInfo.profile, ['granted_scopes', 'id']),
    id: facebookRes.user.uid, // user auth uid.
  };
  userData.userToken = userToken;
  return userData;
};
