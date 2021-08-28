import { put } from '@redux-saga/core/effects';
import { all } from 'redux-saga/effects';
import { selectWithParams } from '../../../utils/selector.utils';

import { IActivity } from '../activity/activity.types';
import { IPublication } from '../publication/publication.types';
import { storePublicationActivities } from './publication-activities.actions';
import { publicationActivitiesSelectors } from './publication-activities.selectors';
import {
  IPublicationActivities,
  IPublicationActivitiesTemp,
  IPublicationActivityCollection,
} from './publication-activities.types';

export function* generatePublicationActivities(publicationId: IPublication['_id'], activities: IActivity[]) {
  const publicationActivitiesCollections = groupActivities(
    publicationId,
    ['likes', 'dislikes', 'comments'],
    activities,
  );
  yield all(
    publicationActivitiesCollections.map((publicationActivities) =>
      put(storePublicationActivities(publicationActivities)),
    ),
  );
}

export function* processPublicationActivity(activity: IActivity) {
  if (!activity.publication) {
    return;
  }

  if (activity.action !== 'comment') {
    const likesId = buildCollectionId(activity.publication, 'likes');
    const dislikesIds = buildCollectionId(activity.publication, 'dislikes');

    const checkId = activity.action === 'like' ? dislikesIds : likesId;
    const updateId = activity.action === 'like' ? likesId : dislikesIds;

    const check = (yield selectWithParams(
      publicationActivitiesSelectors.selectResourceById,
      checkId,
    )) as IPublicationActivities;
    const update = (yield selectWithParams(
      publicationActivitiesSelectors.selectResourceById,
      updateId,
    )) as IPublicationActivities;

    if (check.activities.includes(activity._id)) {
      yield put(
        storePublicationActivities({ ...check, activities: check.activities.filter((id) => id !== activity._id) }),
      );
    }
    if (!update.activities.includes(activity._id)) {
      yield put(storePublicationActivities({ ...update, activities: [...update.activities, activity._id] }));
    }
  } else {
    const commentsCollection = (yield selectWithParams(
      publicationActivitiesSelectors.selectResourceById,
      buildCollectionId(activity.publication, 'comments'),
    )) as IPublicationActivities;
    yield put(
      storePublicationActivities({
        ...commentsCollection,
        activities: [...commentsCollection.activities, activity._id],
      }),
    );
  }
}

export const buildCollectionId = (publicationId: IPublication['_id'], collection: IPublicationActivityCollection) =>
  JSON.stringify({ publication: publicationId, collection });

const generateCollections = (publicationId: IPublication['_id'], collections: IPublicationActivityCollection[]) =>
  collections.reduce((prev, curr) => {
    prev[buildCollectionId(publicationId, curr)] = { _id: buildCollectionId(publicationId, curr), activities: [] };
    return prev;
  }, {} as IPublicationActivitiesTemp);

const groupActivities = (
  publicationId: IPublication['_id'],
  collections: IPublicationActivityCollection[],
  activities: IActivity[],
) => {
  const mapIdToCollection = generateCollections(publicationId, collections);
  activities.forEach((activity) => {
    if (activity.action === 'like') {
      mapIdToCollection[buildCollectionId(publicationId, 'likes')].activities.push(activity._id);
    } else if (activity.action === 'dislike') {
      mapIdToCollection[buildCollectionId(publicationId, 'dislikes')].activities.push(activity._id);
    } else if (activity.action === 'comment') {
      mapIdToCollection[buildCollectionId(publicationId, 'comments')].activities.push(activity._id);
    }
  });
  return Object.values(mapIdToCollection);
};
