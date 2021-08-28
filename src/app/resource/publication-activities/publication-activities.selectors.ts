import { generateResourceSelectors } from '../generators/resource.selectors';

import * as types from './publication-activities.types';

export const publicationActivitiesSelectors = {
  ...generateResourceSelectors<types.IPublicationActivities>((state) => state.resource.publicationActivities),
};
