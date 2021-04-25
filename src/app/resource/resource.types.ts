import { IUserAction, IUserState } from './user/user.types';

export type IResourcesAction = IUserAction;

export interface IResourcesState {
  user: IUserState;
}
