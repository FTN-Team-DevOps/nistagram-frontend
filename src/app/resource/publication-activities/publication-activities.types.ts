import { IActivity } from '../activity/activity.types';
import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';

export type IPublicationActivityCollection = 'likes' | 'dislikes' | 'comments';

export interface IPublicationActivities extends IResource {
  activities: IActivity['_id'][];
}

export interface IPublicationActivitiesTemp {
  [key: string]: {
    _id: IPublicationActivities['_id'];
    activities: IActivity['_id'][];
  };
}

export interface IPublicationActivitiesResponse {
  activities: IActivity[];
}

export type IPublicationActivitiesAction = IResourceAction<IPublicationActivities>;
export type IPublicationActivitiesState = IResourceState<IPublicationActivities>;
export type IPublicationActivitiesSelectors = IResourceSelectors<IPublicationActivities>;
