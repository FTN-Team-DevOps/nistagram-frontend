import { IApiRequestConfig } from '../api.types';
import {
  IActivitySearchParams,
  IActivityCreate,
  IActivityUpdate,
  IActivity,
} from '../../resource/activity/activity.types';

export const searchActivitiesApi = (searchParams?: IActivitySearchParams): IApiRequestConfig => ({
  apiRouteKey: 'searchActivities',
  uri: 'activities',
  method: 'get',
  params: searchParams,
});

export const createActivityApi = (data: IActivityCreate): IApiRequestConfig => ({
  apiRouteKey: 'createActivity',
  uri: 'activities',
  method: 'post',
  data,
});

export const updateActivityApi = (activityId: IActivity['_id'], data: IActivityUpdate): IApiRequestConfig => ({
  apiRouteKey: 'updateActivity',
  uri: `activities/${activityId}`,
  method: 'put',
  data,
});

export const deleteActivityApi = (activityId: IActivity['_id']): IApiRequestConfig => ({
  apiRouteKey: 'deleteActivity',
  uri: `activities/${activityId}`,
  method: 'delete',
});
