import { IApiRequestConfig } from '../api.types';
import {
  IPublicationSearchParams,
  IPublicationCreate,
  IPublicationUpdate,
  IPublication,
} from '../../resource/publication/publication.types';

export const searchPublicationsApi = (searchParams?: IPublicationSearchParams): IApiRequestConfig => ({
  apiRouteKey: 'searchPublications',
  uri: 'publications',
  method: 'get',
  params: searchParams,
});

export const createPublicationApi = (data: IPublicationCreate): IApiRequestConfig => ({
  apiRouteKey: 'createPublication',
  uri: 'publications',
  method: 'post',
  data,
});

export const updatePublicationApi = (
  publicationId: IPublication['_id'],
  data: IPublicationUpdate,
): IApiRequestConfig => ({
  apiRouteKey: 'updatePublication',
  uri: `publications/${publicationId}`,
  method: 'put',
  data,
});

export const deletePublicationApi = (publicationId: IPublication['_id']): IApiRequestConfig => ({
  apiRouteKey: 'deletePublication',
  uri: `publications/${publicationId}`,
  method: 'delete',
});
