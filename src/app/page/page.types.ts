import { IHomePageAction, IHomePageState } from './home/home.types';
import { IProfilePageAction, IProfilePageState } from './profile/profile.types';

export type IPageAction = IProfilePageAction | IHomePageAction;

export interface IPageState {
  profile: IProfilePageState;
  home: IHomePageState;
}
