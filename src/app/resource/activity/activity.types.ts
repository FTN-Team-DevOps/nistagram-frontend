import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';
import { IUser } from '../user/user.types';

export type TActivityAction = 'like' | 'dislike' | 'favorite' | 'deleted' | 'comment' | 'message' | 'tag' | 'location';
export type TPublicationStatus = 'active' | 'deleted';

export interface IActivity extends IResource {
  user: IUser['_id'];
  targetUser?: IUser['_id'];
  publication?: IActivity['_id'];
  text?: string;
  action: TActivityAction;
  taimeStamp: string;
}
export interface IActivitySearchParams {
  _id?: string;
  user: IUser['_id'];
  targetUser?: IUser['_id'];
  publication?: IActivity['_id'];
  action: TActivityAction;
}
export interface IActivityCreate {
  targetUser?: string; // User['id']; // meesage, tag
  publication?: string; // IPublication['id']; //sve sem message
  text?: string; // message, tag, comment, location
  action: TActivityAction;
}
export interface IActivityUpdate extends IActivityCreate {}

export type IActivityAction = IResourceAction<IActivity>;
export type IActivityState = IResourceState<IActivity>;
export type IActivitySelectors = IResourceSelectors<IActivity>;
