import { all, call, put } from '@redux-saga/core/effects';
import { apiRequest } from '../../api/api.saga-services';

import * as api from '../../api/request-config/activity.api';
import * as userService from '../user/user.saga-service';
import * as publicationActivitiesService from '../publication-activities/publication-activities.saga-service';
import * as actions from './activity.actions';

import { IActivity, IActivityDTO, IActivitySave, IActivitySearchParams } from './activity.types';

export function* storeActivity(activity: IActivityDTO) {
  const onlyActivity = (yield call(storeUser, activity)) as IActivity;
  yield put(actions.storeActivity(onlyActivity));
  return onlyActivity._id;
}

export function* clearActivity(activityId: IActivity['_id']) {
  yield put(actions.clearActivity(activityId));
}

export function* searchActivitys(searchParams?: IActivitySearchParams) {
  const activities = (yield call(apiRequest, api.searchActivitiesApi(searchParams))) as IActivityDTO[];

  if (!activities) {
    return;
  }
  const onlyActivities = (yield handlePayload(activities)) as IActivity[];
  yield all(activities.map((activity) => call(storeActivity, activity)));

  if (searchParams && searchParams.publication) {
    yield call(publicationActivitiesService.generatePublicationActivities, searchParams.publication, onlyActivities);
  }
  return activities;
}

export function* createActivity(activityInfo: IActivitySave) {
  const activity = (yield call(apiRequest, api.createActivityApi(activityInfo))) as IActivityDTO;

  if (!activity) {
    return;
  }

  const activityId = (yield call(storeActivity, activity)) as IActivity['_id'];

  if (activity.publication) {
    const onlyActivity = (yield call(storeUser, activity)) as IActivity;
    yield call(publicationActivitiesService.processPublicationActivity, onlyActivity);
  }
  return activityId;
}

export function* updateActivity(id: IActivity['_id'], activityInfo: IActivitySave) {
  const activity = (yield call(apiRequest, api.updateActivityApi(id, activityInfo))) as IActivityDTO;

  if (!activity) {
    return;
  }
  const activityId = (yield call(storeActivity, activity)) as IActivity['_id'];

  if (activity.publication) {
    const onlyActivity = (yield call(storeUser, activity)) as IActivity;
    yield call(publicationActivitiesService.processPublicationActivity, onlyActivity);
  }
  return activityId;
}

export function* deleteActivity(activityId: IActivity['_id']) {
  const activity = (yield call(apiRequest, api.deleteActivityApi(activityId))) as IActivity;

  if (activity.publication) {
    yield call(publicationActivitiesService.processPublicationActivity, activity);
  }

  yield call(clearActivity, activityId);
  return activityId;
}

const convertToActivity = (activity: IActivityDTO) => ({
  ...activity,
  user: activity.user._id,
});

function* handlePayload(activities: IActivityDTO[]) {
  yield all(activities.map((action) => call(userService.storeUser, action.user)));
  return activities.map((activity) => convertToActivity(activity));
}

function* storeUser(activity: IActivityDTO) {
  yield call(userService.storeUser, activity.user);
  return convertToActivity(activity);
}
