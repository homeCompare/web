/* eslint-disable max-len */
import {makeReducer, composeReducers, makeAsyncReducer} from 'redux-toolbelt';
import {combineReducers} from 'redux';

import * as actions from './actions';

const EMPTY_ARRAY = [];
const DEFAULT_ASYNC_STATE = {
  loading: false,
  data: null,
  loaded: false,
};

const overrideUser = (currentData, {payload}) => payload?.userData;
export const user = composeReducers(
  makeAsyncReducer(actions.register, {dataGetter: overrideUser}),
  makeAsyncReducer(actions.login, {dataGetter: overrideUser}),
  makeReducer(actions.logout, () => DEFAULT_ASYNC_STATE),
);

const overrideRemoteHomes = (currentData, {payload}) => payload?.homes;
export const homes = combineReducers({
  local: composeReducers(
    makeReducer({
      [actions.addLocalHome.TYPE]: (currentState, {payload: newHome}) => [...(currentState || EMPTY_ARRAY), newHome],
      [actions.editLocalHome.TYPE]: (currentState, {payload: editedHome}) => currentState.map(home => (editedHome.id === home.id ? editedHome : home)),
      [actions.removeLocalHomeById.TYPE]: (currentState, {payload: homeId}) => currentState.filter(({id}) => id !== homeId),
      [actions.register.success.TYPE]: () => null,
      [actions.login.success.TYPE]: () => null,
    }),
  ),
  remote: composeReducers(
    makeReducer({
      [actions.logout.TYPE]: () => DEFAULT_ASYNC_STATE,
      [actions.addRemoteHome.success.TYPE]: (currentState, {payload: newHomeFromApi}) => [
        ...(currentState || EMPTY_ARRAY),
        newHomeFromApi,
      ],
      [actions.editRemoteHome.success.TYPE]: (currentState, {payload: editedHomeFromApi}) => currentState.map(home => (home.id === editedHomeFromApi.id ? editedHomeFromApi : home)),
      [actions.removeRemoteHomeById.success.TYPE]: (currentState, {payload: homeId}) => currentState.filter(({id}) => id !== homeId),
    }, {defaultState: DEFAULT_ASYNC_STATE}),
    makeAsyncReducer(actions.register, {dataGetter: overrideRemoteHomes}),
    makeAsyncReducer(actions.login, {dataGetter: overrideRemoteHomes}),
  ),
});

// why isnt it on locacl state ?
export const dropzone = composeReducers(
  makeReducer(actions.addTempImages, (currentState, {payload: tempImages}) => [...(currentState || EMPTY_ARRAY), ...tempImages]),
  makeReducer(actions.removeImageById, (currentState, {payload: imageId}) => [
    ...currentState.filter(({id}) => id !== imageId),
  ]),
  makeReducer(actions.removeAllTempImages, () => EMPTY_ARRAY),
);

export const currency = makeReducer(actions.setCurrency, {defaultState: 'EUR'});
