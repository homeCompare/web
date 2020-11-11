import { makeReducer, composeReducers, makeAsyncReducer } from 'redux-toolbelt';
import { updateObjectProperties } from 'redux-toolbelt-immutable-helpers';
import * as actions from './actions';

const EMPTY_ARRAY = [];

export const user = makeAsyncReducer(actions.facebookLogin, actions.googleLogin, actions.logout);

export const homes = composeReducers(
  makeReducer(actions.editHome, (currentState, { payload: editedHome }) => [
    ...currentState.map((home) => (editedHome.id === home.id ? editedHome : home)),
  ]),
  makeReducer(actions.setHomes, (currentState, { payload: homesList }) => homesList),
  makeReducer(actions.addHome, (currentState, { payload: newHome }) => [ ...(currentState || EMPTY_ARRAY), newHome ]),
  makeReducer(actions.removeHomeById, (currentState, { payload: homeId }) => [
    ...currentState.filter(({ id }) => id !== homeId),
  ]),
);

export const currency = makeReducer(actions.setCurrency, { defaultState: 'EUR' });
