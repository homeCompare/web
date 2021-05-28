import {makeActionCreator} from 'redux-toolbelt';
import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import axios from 'axios';

import {facebookLogIn} from '@/shared/utils/auth';

export const facebookLogin = makeThunkAsyncActionCreator('FACEBOOK_LOGIN', async (homesList) => {
  try {
    const userData = await facebookLogIn();
    const response = await axios.post('/api/login', {user: userData, homes: homesList}, {withCredentials: true});

    return await response.data.response;
  } catch (error) {
    console.error('facebookLogin failed', {error});
    return error;
  }
});

export const facebookConfirmLogin = makeThunkAsyncActionCreator('FACEBOOK_CONFIRM_LOGIN', async (homesList) => {
  try {
    const userData = await facebookLogIn();
    const response = await axios.post('/api/confirm-login', {user: userData, homes: homesList}, {withCredentials: true});
    console.log(response);

    if (response) return await response.data.response;
    return [];
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
export const getHomesFromDb = makeThunkAsyncActionCreator('GET_HOMES_FROM_DB', async (userId) => {
  try {
    const response = await axios.post('/api/gethomes', {userId});
    return response.data.homes;
  } catch (error) {
    console.error('facebookLogin failed', {error});
    return error;
  }
});
export const upsertHomeToDb = makeThunkAsyncActionCreator('UPSERT_HOME_TO_DB', async (userId, editedHome, editId) => {
  try {
    const response = await axios.post('/api/home/upsert', {userId, editedHome, editId});
    return [];
  } catch (error) {
    console.error('failed to upsert', {error});
    return error;
  }
});
export const deleteHomeFromDb = makeThunkAsyncActionCreator('DELETE_HOME_FROM_DB', async (userId, homeId) => {
  try {
    const response = await axios.post('/api/home/delete', {userId, homeId});
    return [];
  } catch (error) {
    console.error('failed to delete', {error});
    return error;
  }
});

// DROPZONE ACTIONS
export const addTempImages = makeActionCreator('ADD_TEMP_IMAGES');
export const removeImageById = makeActionCreator('REMOVE_IMAGE_BY_ID');
export const removeAllTempImages = makeActionCreator('REMOVE_ALL_TEMP_IMAGES');
