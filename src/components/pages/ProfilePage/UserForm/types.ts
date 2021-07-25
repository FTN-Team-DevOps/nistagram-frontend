import { IUserCreate } from '../../../../app/resource/user/user.types';

export interface IUserFormProps {
  onSubmit: (data: IUserCreate, picture: File) => void;
}
