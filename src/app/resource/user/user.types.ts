import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';

export type TGender = 'female' | 'male';

export interface IUser extends IResource {
  username: string;
  email: string;
  name: string;
  phone: string;
  gender: TGender;
  siteUrl: string;
  biography: string;
  picture: string;
  private: boolean;
  taggable: boolean;
}
export interface IUserSearchParams {
  id?: IUser['id'];
  username?: IUser['username'];
  email?: IUser['email'];
  name?: IUser['name'];
  phone?: IUser['phone'];
  gender?: IUser['gender'];
  siteUrl?: IUser['siteUrl'];
  biography?: IUser['biography'];
  picture?: IUser['picture'];
  private?: IUser['private'];
  taggable?: IUser['taggable'];
}
export interface IUserCreate extends Omit<IUser, 'id'> {
  password: string;
  isAgent?: boolean;
}
export interface IUserUpdate extends IUser {}

// Auth
export interface IUserWithToken extends IUser {
  token: string;
}
export interface IUserCredentials {
  username: string;
  password: string;
}

export type IUserAction = IResourceAction<IUser>;
export type IUserState = IResourceState<IUser>;
export type IUserSelectors = IResourceSelectors<IUser>;
