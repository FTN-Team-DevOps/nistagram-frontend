import { all, call, put } from '@redux-saga/core/effects';
import { apiRequest } from '../../api/api.saga-services';

import * as api from '../../api/request-config/publication.api';

import * as actions from './publication.actions';

import { IPublication, IPublicationCreate, IPublicationSearchParams, IPublicationUpdate } from './publication.types';

export function* storePublication(publication: IPublication) {
  yield put(actions.storePublication(publication));
  return publication._id;
}

export function* clearPublication(publicationId: IPublication['_id']) {
  yield put(actions.clearPublication(publicationId));
}

export function* searchPublications(searchParams?: IPublicationSearchParams) {
  const publications = (yield call(apiRequest, api.searchPublicationsApi(searchParams))) as IPublication[];

  if (!publications) {
    return;
  }

  const publicationIds = (yield all(
    publications.map((publication) => call(storePublication, publication)),
  )) as IPublication['_id'][];
  return publicationIds;
}

export function* createPublication(publicationInfo: IPublicationCreate) {
  const publication = (yield call(apiRequest, api.createPublicationApi(publicationInfo))) as IPublication;

  if (!publication) {
    return;
  }

  const publicationId = (yield call(storePublication, publication)) as IPublication['_id'];
  return publicationId;
}

export function* updatePublication(id: IPublication['_id'], publicationInfo: IPublicationUpdate) {
  const publication = (yield call(apiRequest, api.updatePublicationApi(id, publicationInfo))) as IPublication;

  if (!publication) {
    return;
  }

  const publicationId = (yield call(storePublication, publication)) as IPublication['_id'];
  return publicationId;
}

export function* deletePublication(publicationId: IPublication['_id']) {
  yield call(apiRequest, api.deletePublicationApi(publicationId));
  yield call(clearPublication, publicationId);
  return publicationId;
}
