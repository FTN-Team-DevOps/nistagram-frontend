import { IProfilePageAction, IProfilePageState } from './profile/profile.types';

export type IPageAction = IProfilePageAction;

export interface IPageState {
  profile: IProfilePageState;
}
