import { generateClearResourceAction, generateStoreResourceAction } from '../generators/resource.actions';

import * as types from './activity.types';
import * as constants from './activity.constants';

export const storeActivity = generateStoreResourceAction<types.IActivity>(constants.STORE_ACTIVITY);
export const clearActivity = generateClearResourceAction(constants.CLEAR_ACTIVITY);
