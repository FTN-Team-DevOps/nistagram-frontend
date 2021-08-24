import { all, call, put } from '@redux-saga/core/effects';
import { apiRequest } from '../../api/api.saga-services';

import * as api from '../../api/request-config/activity.api';
import * as actions from './activity.actions';

import { IActivity, IActivityCreate, IActivitySearchParams, IActivityUpdate } from './activity.types';

export function* storeActivity(activity: IActivity) {
  yield put(actions.storeActivity(activity));
  return activity._id;
}

export function* clearActivity(activityId: IActivity['_id']) {
  yield put(actions.clearActivity(activityId));
}

export function* searchActivitys(searchParams?: IActivitySearchParams) {
  const activitys = (yield call(apiRequest, api.searchActivitiesApi(searchParams))) as IActivity[];

  if (!activitys) {
    return;
  }

  const activityIds = (yield all(activitys.map((activity) => call(storeActivity, activity)))) as IActivity['_id'][];
  return activityIds;
}

export function* createActivity(activityInfo: IActivityCreate) {
  const activity = (yield call(apiRequest, api.createActivityApi(activityInfo))) as IActivity;

  if (!activity) {
    return;
  }

  const activityId = (yield call(storeActivity, activity)) as IActivity['_id'];
  return activityId;
}

export function* updateActivity(id: IActivity['_id'], activityInfo: IActivityUpdate) {
  const activity = (yield call(apiRequest, api.updateActivityApi(id, activityInfo))) as IActivity;

  if (!activity) {
    return;
  }

  const activityId = (yield call(storeActivity, activity)) as IActivity['_id'];
  return activityId;
}

export function* deleteActivity(activityId: IActivity['_id']) {
  yield call(apiRequest, api.deleteActivityApi(activityId));
  yield call(clearActivity, activityId);
  return activityId;
}
