import { generateResourceSelectors } from '../generators/resource.selectors';

import * as types from './user.types';

export const userSelectors = {
  ...generateResourceSelectors<types.IUser>((state) => state.resource.user),
};
