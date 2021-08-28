import React, { FunctionComponent } from 'react';
import { activitySelectors } from '../../../../../app/resource/activity/activity.selectors';
import { useSelectWithParams } from '../../../../../utils/selector.utils';
import { CommentForm } from './CommentForm';
import { Comment } from './Comment';
import { useCommentsStyle } from './style';
import { ICommentsProps } from './types';

export const Comments: FunctionComponent<ICommentsProps> = ({ activityIds, onAddComment }) => {
  const classes = useCommentsStyle();
  const activities = useSelectWithParams(activitySelectors.selectResourcesById, activityIds);

  return (
    <div className={classes.comments}>
      {activities.map(
        (activity) =>
          activity && <Comment key={`comment-${activity._id}`} userId={activity.user} text={activity.text} />,
      )}
      <div>
        <CommentForm onSubmit={onAddComment} />
      </div>
    </div>
  );
};
