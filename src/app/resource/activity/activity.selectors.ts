import { generateResourceSelectors } from '../generators/resource.selectors';

import * as types from './activity.types';

export const activitySelectors = {
  ...generateResourceSelectors<types.IActivity>((state) => state.resource.activity),
};
