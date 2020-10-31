import { makeReducer, composeReducers } from 'redux-toolbelt';

import * as actions from './actions';

const EMPTY_ARRAY = [];

export const user = composeReducers(makeReducer(actions.setUser), makeReducer(actions.updateUser));

export const homes = composeReducers(
  makeReducer(actions.editHome, (currentState, {payload: editedHome}) => [
    ...currentState.map(home => (editedHome.id === home.id ? editedHome : home)),
  ]),
  makeReducer(actions.setHomes, (currentState, { payload: homesList }) => homesList),
  makeReducer(actions.addHome, (currentState, { payload: newHome }) => [
    ...(currentState || EMPTY_ARRAY),
    newHome,
  ]),
  makeReducer(actions.removeHomeById, (currentState, { payload: homeId }) => [
    ...currentState.filter(({ id }) => id !== homeId),
  ]),
);

export const currency = makeReducer(actions.setCurrency, { defaultState: 'EUR' });
