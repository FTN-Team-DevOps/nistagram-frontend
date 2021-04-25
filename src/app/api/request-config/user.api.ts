import { IApiRequestConfig } from '../api.types';
import { IUserSearchParams, IUserCreate, IUserUpdate, IUser } from '../../resource/user/user.types';

export const searchUsersApi = (searchParams?: IUserSearchParams): IApiRequestConfig => ({
  apiRouteKey: 'searchUsers',
  uri: 'users',
  method: 'get',
  params: searchParams,
});

export const createUserApi = (data: IUserCreate): IApiRequestConfig => ({
  apiRouteKey: 'createUser',
  uri: 'users',
  method: 'post',
  data,
});

export const updateUserApi = (data: IUserUpdate): IApiRequestConfig => ({
  apiRouteKey: 'updateUser',
  uri: 'users',
  method: 'put',
  data,
});

export const deleteUserApi = (userId: IUser['id']): IApiRequestConfig => ({
  apiRouteKey: 'deleteUser',
  uri: 'users',
  method: 'delete',
  params: {
    id: userId,
  },
});
