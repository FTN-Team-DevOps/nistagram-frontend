import { combineReducers } from 'redux';
import { activityReducer } from './activity/activity.reducer';
import { publicationActivitiesReducer } from './publication-activities/publication-activities.reducer';
import { publicationReducer } from './publication/publication.reducer';

import * as types from './resource.types';

import { userReducer } from './user/user.reducer';

export const resourceReducer = combineReducers<types.IResourcesState>({
  user: userReducer,
  publication: publicationReducer,
  activity: activityReducer,
  publicationActivities: publicationActivitiesReducer,
});
