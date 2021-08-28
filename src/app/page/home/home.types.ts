import { ISelector } from '../../common/common.types';
import { IPublication } from '../../resource/publication/publication.types';

import * as constants from './home.constants';

export interface ISetupHomePage {
  type: typeof constants.SETUP_HOME_PAGE;
}

export interface IStoreSearchedPublications {
  type: typeof constants.STORE_SEARCHED_PUBLICATIONS;
  payload: IPublication['_id'][];
}

export interface IClearSearchedPublications {
  type: typeof constants.CLEAR_SEARCHED_PUBLICATIONS;
}

export type IHomePageAction = IStoreSearchedPublications | IClearSearchedPublications;

export interface IHomePageState {
  searchedPublications: IPublication['_id'][];
}

export interface ISelectSearchedPublications extends ISelector<IPublication['_id'][]> {}

export interface IHomePageSelectors {
  selectSearchedPublications: ISelectSearchedPublications;
}
