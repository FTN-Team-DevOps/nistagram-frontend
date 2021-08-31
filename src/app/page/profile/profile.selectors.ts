import * as types from './profile.types';

export const profilePageSelectors: types.IProfilePageSelectors = {
  selectSearchedUser: (state) => state.page.profile.searchedUser,
  selectSearchedPublications: (state) => state.page.profile.searchedPublications,
};
