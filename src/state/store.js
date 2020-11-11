import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { composeReducers } from 'redux-toolbelt';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import * as reducers from './reducers';


let store;
const rootReducer = composeReducers(combineReducers(reducers));

const persistedReducer = persistReducer({
  key: 'root',
  storage,
  blacklist: ['_persist'],
},
rootReducer);

function initStore(preloadedState = {}) {
  return createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = initialState => {
  // eslint-disable-next-line no-underscore-dangle
  const _store = useMemo(() => initializeStore(initialState), [initialState]);
  return _store;
};

export const usePersist = _store => persistStore(_store);
