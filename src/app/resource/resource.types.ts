import { IUserAction, IUserState } from './user/user.types';
import { IPublicationAction, IPublicationState } from './publication/publication.types';
import { IActivityAction, IActivityState } from './activity/activity.types';
import {
  IPublicationActivities,
  IPublicationActivitiesState,
} from './publication-activities/publication-activities.types';

export type IResourcesAction = IUserAction | IPublicationAction | IActivityAction | IPublicationActivities;

export interface IResourcesState {
  user: IUserState;
  publication: IPublicationState;
  activity: IActivityState;
  publicationActivities: IPublicationActivitiesState;
}
