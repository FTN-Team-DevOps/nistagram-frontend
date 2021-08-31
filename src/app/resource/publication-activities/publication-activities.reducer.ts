import { generateResourceReducer } from '../generators/resource.reducer';

import * as types from './publication-activities.types';
import * as constants from './publication-activities.constants';

export const publicationActivitiesReducer = generateResourceReducer<types.IPublicationActivities>({
  STORE: constants.STORE_PUBLICATION_ACTIVITIES,
  CLEAR: constants.CLEAR_PUBLICATION_ACTIVITIES,
});
