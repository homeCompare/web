import {makeActionCreator} from 'redux-toolbelt';
import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import axios from 'axios';
import Cookies from 'js-cookie';

import {googleLogin} from '@/shared/utils/auth';

export const register = makeThunkAsyncActionCreator(
  'regsiter',
  async ({socialConnectionData, homes, paymentMethod}) => {
    try {
      const {data} = await axios.post('/api/register', {socialConnectionData, homes, paymentMethod});
      return data;
    } catch (error) {
      console.error('register action failed', error);
      throw error;
    }
  },
);

export const login = makeThunkAsyncActionCreator('LOGIN', async ({loginByCookie}) => {
  try {
    if (loginByCookie) {
      const userHasUserTokenCookie = Cookies.getJSON('userToken');
      if (userHasUserTokenCookie) {
        const {data} = await axios.get('/api/login');
        return data;
      }

      return;
    }

    const socialConnectionData = await googleLogin();
    const {data} = await axios.post('/api/login', {socialConnectionData});
    return data;
  } catch (error) {
    console.error('login action failed', error);
    throw error;
  }
});

export const logout = makeActionCreator('LOGOUT', () => {
  Cookies.remove('userToken');
  return null;
});

// HOME ACTIONS
export const addLocalHome = makeActionCreator('ADD_LOCAL_HOME');
export const editLocalHome = makeActionCreator('EDIT_LOCAL_HOME');
export const removeLocalHomeById = makeActionCreator('REMOVE_LOCAL_HOME_BY_ID');

export const addRemoteHome = makeThunkAsyncActionCreator('ADD_REMOTE_HOME', async home => {
  try {
    const {data} = await axios.post('/api/home/upsert', {home});
    if (data.success) {
      return home;
    }

    console.error('addRemoteHome didnt succeed', data);
  } catch (error) {
    console.error('Add remote home failed', error);
    throw error;
  }
});

export const editRemoteHome = makeThunkAsyncActionCreator('EDIT_REMOTE_HOME', async home => {
  try {
    const {data} = await axios.post('/api/home/upsert', {home, isEdit: true});
    if (data.success) {
      return home;
    }
  } catch (error) {
    console.error('Edit remote home failed', error);
    throw error;
  }
});

export const removeRemoteHomeById = makeThunkAsyncActionCreator('REMOVE_REMOTE_HOME', async homeId => {
  try {
    await axios.post('/api/home/delete', {homeId});
    return homeId;
  } catch (error) {
    console.error('Remove remote home failed', error);
    throw error;
  }
});

export const setCurrency = makeActionCreator('SET_CURRENCY');

// DROPZONE ACTIONS
export const addTempImages = makeActionCreator('ADD_TEMP_IMAGES');
export const removeImageById = makeActionCreator('REMOVE_IMAGE_BY_ID');
export const removeAllTempImages = makeActionCreator('REMOVE_ALL_TEMP_IMAGES');
