import { IApiRequestConfig } from '../api.types';
import { IUserCredentials } from '../../resource/user/user.types';

export const loginApi = (data: IUserCredentials): IApiRequestConfig<unknown, IUserCredentials> => ({
  apiRouteKey: 'login',
  uri: 'users/log-in',
  method: 'post',
  data,
});
