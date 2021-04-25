import { call, cancelled, put } from 'redux-saga/effects';
import { select } from '../../utils/selector.utils';
import axios from 'axios';

// import { logout } from '../auth/auth.saga-services';
import * as types from './api.types';
import * as actions from './api.actions';

import { authSelectors } from '../auth/auth.selectors';

// SINGLETON, we don't need multiple instances of this
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* apiRequest<TParams = any, TPayload = any, TResponse = any>(
  requestInfo: types.IApiRequestConfig<TParams, TPayload>,
) {
  const authToken = yield select(authSelectors.selectAccessToken);
  const cancelSource = yield call([axios.CancelToken, axios.CancelToken.source]);
  try {
    yield put(actions.storeApiInProgress(requestInfo.apiRouteKey));
    yield put(actions.clearApiError(requestInfo.apiRouteKey));

    const response = yield call([api, api.request], {
      url: requestInfo.uri,
      method: requestInfo.method,
      params: requestInfo.params,
      data: requestInfo.data,
      cancelToken: cancelSource.token,
      responseType: requestInfo.responseType ? requestInfo.responseType : undefined,
      headers: { Authorization: `Bearer ${authToken}` },
      ...requestInfo.overrides,
    });

    yield put(actions.clearApiInProgress(requestInfo.apiRouteKey));
    return response.data as TResponse;
  } catch (e) {
    if (e.response?.data) {
      yield put(actions.storeApiError(requestInfo.apiRouteKey, e.response.data));
      yield put(actions.clearApiInProgress(requestInfo.apiRouteKey));
      return null;
    }

    throw e;
  } finally {
    if (yield cancelled()) {
      // cancel api call if task is cancelled
      yield call([cancelSource, cancelSource.cancel]);
    }
  }
}
