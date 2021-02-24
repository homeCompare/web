import { makeActionCreator } from 'redux-toolbelt';
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import { omit } from 'lodash';
import firebase from 'firebase/app';
import axios from 'axios';

import { signInWithFacebook } from '@/shared/utils/auth';

export const facebookLogin = makeThunkAsyncActionCreator('FACEBOOK_LOGIN', async () => {
  try {
    const facebookRes = await signInWithFacebook();
    const userToken = await firebase.auth().currentUser.getIdToken();
    const userData = {
      ...omit(facebookRes.additionalUserInfo.profile, ['granted_scopes', 'id']),
      id: facebookRes.user.uid, // user auth uid.
    };

    await axios.post('/api/login', {...userData, userToken}, {withCredentials: true});
    return userData;
  } catch (error) {
    console.error('facebookLogin failed', {error});
    return error;
  }
});

export const logout = makeActionCreator('LOGOUT', () => null);

// HOME ACTIONS
export const setHomes = makeActionCreator('SET_HOMES');
export const addHome = makeActionCreator('ADD_HOME');
export const editHome = makeActionCreator('EDIT_HOME');
export const removeHomeById = makeActionCreator('REMOVE_HOME_BY_ID');
export const setCurrency = makeActionCreator('SET_CURRENCY');

// DROPZONE ACTIONS
export const addTempImages = makeActionCreator('ADD_TEMP_IMAGES');
export const removeImageById = makeActionCreator('REMOVE_IMAGE_BY_ID');
export const removeAllTempImages = makeActionCreator('REMOVE_ALL_TEMP_IMAGES');
