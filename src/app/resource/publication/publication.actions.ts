import { generateClearResourceAction, generateStoreResourceAction } from '../generators/resource.actions';

import * as types from './publication.types';
import * as constants from './publication.constants';

export const storePublication = generateStoreResourceAction<types.IPublication>(constants.STORE_PUBLICATION);
export const clearPublication = generateClearResourceAction(constants.CLEAR_PUBLICATION);
