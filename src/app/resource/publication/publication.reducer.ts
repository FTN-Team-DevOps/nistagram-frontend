import { generateResourceReducer } from '../generators/resource.reducer';

import * as types from './publication.types';
import * as constants from './publication.constants';

export const publicationReducer = generateResourceReducer<types.IPublication>({
  STORE: constants.STORE_PUBLICATION,
  CLEAR: constants.CLEAR_PUBLICATION,
});
