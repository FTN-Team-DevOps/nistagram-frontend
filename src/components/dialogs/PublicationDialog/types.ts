import { IPublicationCreate } from '../../../app/resource/publication/publication.types';

export interface IPublicationDialogProps {
  title?: string;
  onCancel?: () => void;
  onSubmit: (data: IPublicationCreate) => void;
}
