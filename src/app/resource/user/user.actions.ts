import { generateClearResourceAction, generateStoreResourceAction } from '../generators/resource.actions';

import * as types from './user.types';
import * as constants from './user.constants';

export const storeUser = generateStoreResourceAction<types.IUser>(constants.STORE_USER);
export const clearUser = generateClearResourceAction(constants.CLEAR_USER);
