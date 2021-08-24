import { ISelectorWithParams } from '../common/common.types';
import * as constants from './api.constants';

import { AxiosRequestConfig } from 'axios';

type IAuthApiRouteKey = 'login';
type IUserApiRouteKey = 'searchUsers' | 'createUser' | 'updateUser' | 'deleteUser';
type IPublicationApiRouteKey = 'searchPublications' | 'createPublication' | 'updatePublication' | 'deletePublication';
type IActivityApiRouteKey = 'searchActivities' | 'createActivity' | 'updateActivity' | 'deleteActivity';

export type IApiRouteKey = IAuthApiRouteKey | IUserApiRouteKey | IPublicationApiRouteKey | IActivityApiRouteKey;

export interface IApiError {
  status: number;
  error: string;
  message: string;
}

export interface IApiRequestState {
  inProgress: boolean;
  error: IApiError | null;
}

export interface IStoreApiInProgress {
  type: typeof constants.STORE_API_IN_PROGRESS;
  payload: IApiRouteKey;
}

export interface IClearApiInProgress {
  type: typeof constants.CLEAR_API_IN_PROGRESS;
  payload: IApiRouteKey;
}

export interface IStoreApiError {
  type: typeof constants.STORE_API_ERROR;
  payload: {
    key: IApiRouteKey;
    error: IApiError;
  };
}

export interface IClearApiError {
  type: typeof constants.CLEAR_API_ERROR;
  payload: IApiRouteKey;
}

export type IApiAction = IStoreApiInProgress | IClearApiInProgress | IStoreApiError | IClearApiError;

export type IApiState = {
  [key in IApiRouteKey]: IApiRequestState;
};

export interface ISelectApiInProgress extends ISelectorWithParams<IApiRouteKey, boolean> {}
export interface ISelectApiError extends ISelectorWithParams<IApiRouteKey, IApiError | null> {}

export interface IApiSelectors {
  selectApiInProgress: ISelectApiInProgress;
  selectApiError: ISelectApiError;
}

type IResponseType = 'blob';
export type IApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface IApiRequestConfig<TParams = unknown, TPayload = unknown> {
  apiRouteKey: IApiRouteKey;
  uri: string;
  method: IApiMethod;
  params?: TParams;
  data?: TPayload;
  responseType?: IResponseType;
  overrides?: Pick<AxiosRequestConfig, 'baseURL' | 'headers'>;
}
