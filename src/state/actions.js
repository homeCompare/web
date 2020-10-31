import { makeActionCreator } from 'redux-toolbelt';

// USERS ACTIONS
export const setUser = makeActionCreator('SET_USER');
export const updateUser = makeActionCreator('UPDATE_USER');

// HOME ACTIONS
export const setHomes = makeActionCreator('SET_HOMES');
export const addHome = makeActionCreator('ADD_HOME');
export const editHome = makeActionCreator('EDIT_HOME');
export const removeHomeById = makeActionCreator('REMOVE_HOME_BY_ID');
export const setCurrency = makeActionCreator('SET_CURRENCY');
