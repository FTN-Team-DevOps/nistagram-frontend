import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';
import { IPublication } from '../publication/publication.types';
import { IUser } from '../user/user.types';

export type TActivityAction = 'like' | 'dislike' | 'favorite' | 'deleted' | 'comment' | 'message' | 'tag' | 'location';
export type TPublicationStatus = 'active' | 'deleted';

export interface IActivityDTO extends IResource {
  user: IUser;
  targetUser?: IUser['_id'];
  publication?: IPublication['_id'];
  text?: string;
  action: TActivityAction;
  taimeStamp: string;
  payload?: IUser | IUser['_id'];
}

export interface IActivity extends IResource {
  user: IUser['_id'];
  targetUser?: IUser['_id'];
  publication?: IPublication['_id'];
  text?: string;
  action: TActivityAction;
  taimeStamp: string;
  payload?: IUser | IUser['_id'];
}
export interface IActivitySearchParams {
  _id?: string;
  user?: IUser['_id'];
  targetUser?: IUser['_id'];
  publication?: IPublication['_id'];
  action?: TActivityAction;
}
export interface IActivitySave {
  targetUser?: string; // User['id']; // meesage, tag
  publication?: string; // IPublication['id']; //sve sem message
  text?: string; // message, tag, comment, location
  action: TActivityAction;
}

export type IActivityAction = IResourceAction<IActivity>;
export type IActivityState = IResourceState<IActivity>;
export type IActivitySelectors = IResourceSelectors<IActivity>;
