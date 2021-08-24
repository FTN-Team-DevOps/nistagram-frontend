import { IResource, IResourceAction, IResourceSelectors, IResourceState } from '../generators/resource.types';
import { IUser } from '../user/user.types';

export type TPublicationType = 'post' | 'story';
export type TPublicationStatus = 'active' | 'deleted';

export interface IPublication extends IResource {
  user: IUser['_id'];
  descritpion: string;
  pictures: string[];
  publicationType: TPublicationType;
  publishedTimeStamp: string;
  lastChangedTimeStamp: string;
  endTimeStamp: string | undefined;
  siteUrl: string | null;
  status: TPublicationStatus;
}
export interface IPublicationSearchParams {
  _id?: string;
  user?: IUser['_id'];
  publicationType?: TPublicationType;
}
export interface IPublicationCreate {
  descritpion: string;
  pictures: string[];
  publicationType: TPublicationType;
  endTimeStamp?: string;
  siteUrl?: string;
}
export interface IPublicationUpdate {
  descritpion?: string;
  pictures?: string[];
  publicationType?: TPublicationType;
  endTimeStamp?: string;
  siteUrl?: string;
}

export type IPublicationAction = IResourceAction<IPublication>;
export type IPublicationState = IResourceState<IPublication>;
export type IPublicationSelectors = IResourceSelectors<IPublication>;