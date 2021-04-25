import { generateResourceReducer } from '../generators/resource.reducer';

import * as types from './user.types';
import * as constants from './user.constants';

export const userReducer = generateResourceReducer<types.IUser>({
  STORE: constants.STORE_USER,
  CLEAR: constants.CLEAR_USER,
});
