import {createSelector} from 'reselect';

const isPremium = user => user && user.isPremium;

const EMPTY_ARRAY = [];

export const selectLocalHomes = state => state.homes.local;
export const selectRemoteHomes = state => state.homes.remote?.data;
export const selectRemoteHomesLoaded = state => state.homes.remote?.loaded;
export const selectRemoteHomesLoading = state => state.homes.remote?.loading;

export const selectUserData = state => state.user?.data;
export const selectUserLoaded = state => state.user.loaded;
export const selectUserLoading = state => state.user.loading;

export const selectHomes = createSelector(
  selectUserData,
  selectLocalHomes,
  selectRemoteHomes,
  (userData, localHomes, remoteHomes) => {
    if (isPremium(userData)) {
      return remoteHomes || EMPTY_ARRAY;
    }

    return localHomes || EMPTY_ARRAY;
  },
);

export const selectIsHomesLoaded = createSelector(
  selectUserData,
  selectRemoteHomesLoaded,
  (userData, remoteHomesLoaded) => {
    if (isPremium(userData)) {
      return remoteHomesLoaded;
    }

    return true;
  },
);

export const selectCurrency = state => state.currency;
