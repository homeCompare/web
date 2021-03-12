/* eslint-disable max-len */
import { makeReducer, composeReducers, makeAsyncReducer } from 'redux-toolbelt';

import * as actions from './actions';

const EMPTY_ARRAY = [];
const userDefaultState = {loading: false, data: null, loaded: false};
const dropzoneDefaultState = [];

export const user = composeReducers(
  makeAsyncReducer(actions.facebookLogin, (currentState, {payload: userData}) => ({
    ...currentState,
    data: {
      ...currentState.data,
      ...userData,
    },
  })),
  makeReducer(actions.logout, () => userDefaultState),
);

export const homes = composeReducers(
  makeReducer(actions.editHome, (currentState, { payload: editedHome }) => [
    ...currentState.map((home) => (editedHome.id === home.id ? editedHome : home)),
  ]),
  makeReducer(actions.setHomes, (currentState, { payload: homesList }) => homesList),
  makeReducer(actions.addHome, (currentState, { payload: newHome }) => [...(currentState || EMPTY_ARRAY), newHome]),
  makeReducer(actions.removeHomeById, (currentState, { payload: homeId }) => [
    ...currentState.filter(({ id }) => id !== homeId),
  ]),
);

export const dropzone = composeReducers(
  makeReducer(actions.addTempImages, (currentState, {payload: tempImages}) => [...(currentState || EMPTY_ARRAY), ...tempImages]),
  makeReducer(actions.removeImageById, (currentState, { payload: imageId }) => [
    ...currentState.filter(({ id }) => id !== imageId),
  ]),
  makeReducer(actions.removeAllTempImages, () => dropzoneDefaultState),

);

export const currency = makeReducer(actions.setCurrency, { defaultState: 'EUR' });
