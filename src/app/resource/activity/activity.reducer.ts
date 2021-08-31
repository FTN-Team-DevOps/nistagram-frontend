import { generateResourceReducer } from '../generators/resource.reducer';

import * as types from './activity.types';
import * as constants from './activity.constants';

export const activityReducer = generateResourceReducer<types.IActivity>({
  STORE: constants.STORE_ACTIVITY,
  CLEAR: constants.CLEAR_ACTIVITY,
});
