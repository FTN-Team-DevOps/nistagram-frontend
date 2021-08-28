import { call, put } from 'redux-saga/effects';
import * as publicationResourceService from '../../resource/publication/publication.saga-service';
import * as actions from './home.actions';
import { IPublication } from '../../resource/publication/publication.types';

export function* setupHomePage() {
  const publicationIds = (yield call(publicationResourceService.searchPublications)) as IPublication['_id'][];
  yield put(publicationIds ? actions.storeSearchedPublications(publicationIds) : actions.clearSearchedPublications());
}
