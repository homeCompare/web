/* eslint-disable max-len */
import {makeReducer, composeReducers, makeAsyncReducer} from 'redux-toolbelt';
import _ from 'lodash';

import * as actions from './actions';

const EMPTY_ARRAY = [];
const userDefaultState = {loading: false, data: null, loaded: false};

export const user = composeReducers(
  makeAsyncReducer(actions.facebookLogin, (currentState, {payload: {userRes}}) => ({
    ...currentState,
    data: {
      ...currentState.data,
      ...userRes,
    },
  })),
  makeReducer(actions.logout, () => userDefaultState),

);

export const homes = composeReducers(
  makeAsyncReducer(actions.getHomesFromDb, (currentState, {payload: homesList}) => ({
    ...currentState,
    data: [
      ...currentState.data,
      ...homesList,
    ],
  })),
  makeReducer(actions.editHome, (currentState, {payload: editedHome}) => ({
    ...currentState,
    data: [
      ...currentState.data.map((home) => (editedHome.id === home.id ? editedHome : home)),
    ],
  })),
  makeReducer(actions.setHomes, (currentState, {payload: homesList}) => homesList),
  makeReducer(actions.addHome, (currentState, {payload: newHome}) => ({
    ...currentState,
    data: [
      ...currentState.data,
      newHome,
    ],
  }

  )),
  makeReducer(actions.removeHomeById, (currentState, {payload: homeId}) => ({
    ...currentState,
    data: [
      ...currentState.data.filter(({id}) => id !== homeId),
    ],

  })),

);

export const dropzone = composeReducers(
  makeReducer(actions.addTempImages, (currentState, {payload: tempImages}) => [...(currentState || EMPTY_ARRAY), ...tempImages]),
  makeReducer(actions.removeImageById, (currentState, {payload: imageId}) => [
    ...currentState.filter(({id}) => id !== imageId),
  ]),
  makeReducer(actions.removeAllTempImages, () => EMPTY_ARRAY),

);

export const currency = makeReducer(actions.setCurrency, {defaultState: 'EUR'});
