import * as types from './auth.types';

export const authSelectors: types.IAuthSelectors = {
  selectLoggedUser: (state) => state.auth.loggedUser,
  selectAccessToken: (state) => state.auth.accessToken,
};
