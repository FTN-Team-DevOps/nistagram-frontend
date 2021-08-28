import { generateClearResourceAction, generateStoreResourceAction } from '../generators/resource.actions';

import * as types from './publication-activities.types';
import * as constants from './publication-activities.constants';

export const storePublicationActivities = generateStoreResourceAction<types.IPublicationActivities>(
  constants.STORE_PUBLICATION_ACTIVITIES,
);
export const clearPublicationActivities = generateClearResourceAction(constants.CLEAR_PUBLICATION_ACTIVITIES);
