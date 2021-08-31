import { call } from 'redux-saga/effects';

import { IPublication } from '../../resource/publication/publication.types';
import { IActivity, IActivitySave } from '../../resource/activity/activity.types';

import * as activityResourceService from '../../resource/activity/activity.saga-service';

export function* setupPublicationView(publicationId: IPublication['_id']) {
  yield call(activityResourceService.searchActivitys, { publication: publicationId });
}

export function* saveActivity(activity: IActivitySave, id?: IActivity['_id']) {
  if (id) {
    yield call(activityResourceService.updateActivity, id, activity);
  } else {
    yield call(activityResourceService.createActivity, activity);
  }
}
