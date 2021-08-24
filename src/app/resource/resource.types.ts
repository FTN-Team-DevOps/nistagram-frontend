import { IUserAction, IUserState } from './user/user.types';
import { IPublicationAction, IPublicationState } from './publication/publication.types';
import { IActivityAction, IActivityState } from './activity/activity.types';

export type IResourcesAction = IUserAction | IPublicationAction | IActivityAction;

export interface IResourcesState {
  user: IUserState;
  publication: IPublicationState;
  activity: IActivityState;
}
