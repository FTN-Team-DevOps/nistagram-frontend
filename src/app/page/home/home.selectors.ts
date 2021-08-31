import * as types from './home.types';

export const homePageSelectors: types.IHomePageSelectors = {
  selectSearchedPublications: (state) => state.page.home.searchedPublications,
};
