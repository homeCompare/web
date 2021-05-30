import { makeActionCreator } from 'redux-toolbelt';
import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import axios from 'axios';

import { facebookLogIn } from '@/shared/utils/auth';

export const facebookLogin = makeThunkAsyncActionCreator(
  'FACEBOOK_LOGIN',
  async (type, homesList) => {
    try {
      const userData = await facebookLogIn();

      const response = await axios.post(
        '/api/login',
        { user: userData, homes: homesList, type },
        { withCredentials: true }
      );

      if (response) return await response.data.response;
      return [];
    } catch (error) {
      console.error('facebookLogin failed', { error });
      return error;
    }
  }
);

export const logout = makeActionCreator('LOGOUT', () => null);

// HOME ACTIONS
export const setHomes = makeActionCreator('SET_HOMES');
export const addHome = makeActionCreator('ADD_HOME');
export const editHome = makeActionCreator('EDIT_HOME');
export const removeHomeById = makeActionCreator('REMOVE_HOME_BY_ID');
export const setCurrency = makeActionCreator('SET_CURRENCY');
export const getHomesFromDb = makeThunkAsyncActionCreator(
  'GET_HOMES_FROM_DB',
  async () => {
    try {
      const response = await axios.post('/api/gethomes', {
        withCredentials: true,
      });
      return response.data.homes;
    } catch (error) {
      console.error('facebookLogin failed', { error });
      return error;
    }
  }
);

// DROPZONE ACTIONS
export const addTempImages = makeActionCreator('ADD_TEMP_IMAGES');
export const removeImageById = makeActionCreator('REMOVE_IMAGE_BY_ID');
export const removeAllTempImages = makeActionCreator('REMOVE_ALL_TEMP_IMAGES');
