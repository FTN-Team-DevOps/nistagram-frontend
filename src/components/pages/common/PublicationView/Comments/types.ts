import { IActivity } from '../../../../../app/resource/activity/activity.types';

export interface ICommentsProps {
  activityIds: IActivity['_id'][];
  onAddComment: (comment: string) => void;
}
