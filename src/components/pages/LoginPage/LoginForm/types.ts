import { IUserCredentials } from '../../../../app/resource/user/user.types';

export interface ILoginFormProps {
  onSubmit: (data: IUserCredentials) => void;
}
