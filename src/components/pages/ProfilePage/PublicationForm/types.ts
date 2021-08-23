import { IPublicationCreate } from '../../../../app/resource/publication/publication.types';

export interface IPublicationFormProps {
  onSubmit: (data: IPublicationCreate) => void;
}
