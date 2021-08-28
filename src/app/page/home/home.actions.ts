import * as types from './home.types';
import * as constants from './home.constants';
import { IPublication } from '../../resource/publication/publication.types';

export const setupHomePage = (): types.ISetupHomePage => ({
  type: constants.SETUP_HOME_PAGE,
});

export const storeSearchedPublications = (
  searchedPublications: IPublication['_id'][],
): types.IStoreSearchedPublications => ({
  type: constants.STORE_SEARCHED_PUBLICATIONS,
  payload: searchedPublications,
});

export const clearSearchedPublications = (): types.IClearSearchedPublications => ({
  type: constants.CLEAR_SEARCHED_PUBLICATIONS,
});
