import { makeActionCreator, makeAsyncActionCreator } from 'redux-toolbelt';
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import { signInWithFacebook, signOut, signInWithGoogle } from '../firebase/firebase';
// USERS ACTIONS
export const setUser = makeActionCreator('SET_USER');
export const updateUser = makeActionCreator('UPDATE_USER');
export const loadUser = makeAsyncActionCreator('LOAD_USER');

// export const logoutUser = makeAsyncActionCreator('LOGOUT_USER');

export const facebookLogin = makeThunkAsyncActionCreator('FACEBOOK_LOGIN', async (userCredentials) => {
  try {
    const fbRes = await signInWithFacebook();
    return fbRes;
  } catch (e) {
    return e;
  }
});

export const googleLogin = makeThunkAsyncActionCreator('GOOGLE_LOGIN', async (userCredentials) => {
  try {
    const googleResponse = await signInWithGoogle();
    console.log(googleResponse);
    return googleResponse;
  } catch (err) {
    return err;
  }
});

export const logout = makeThunkAsyncActionCreator('LOGOUT', async () => {
  try {
    const logoutRES = await signOut();
    console.log(logoutRES);
    return logoutRES;
  } catch (err) {
    return err;
  }
});
// export const loginUsers = makeThunkAsyncActionCreator('FETCH_USER', signInWithFacebook);

// HOME ACTIONS
export const setHomes = makeActionCreator('SET_HOMES');
export const addHome = makeActionCreator('ADD_HOME');
export const editHome = makeActionCreator('EDIT_HOME');
export const removeHomeById = makeActionCreator('REMOVE_HOME_BY_ID');
export const setCurrency = makeActionCreator('SET_CURRENCY');
