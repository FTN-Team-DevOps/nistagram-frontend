import { IUser } from '../../../../../../app/resource/user/user.types';

export interface ICommentProps {
  userId: IUser['_id'];
  text?: string;
}
