import { IPublication } from '../../../../app/resource/publication/publication.types';

export interface IPublicationsProps {
  publicationIds: IPublication['_id'][];
}
