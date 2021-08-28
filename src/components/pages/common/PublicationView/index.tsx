import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { publicationSelectors } from '../../../../app/resource/publication/publication.selectors';
import { useSelect, useSelectWithParams } from '../../../../utils/selector.utils';
import { usePublicationViewStyle } from './style';
import { IPublicationViewProps } from './types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useEffect } from 'react';
import { setupPublicationView } from '../../../../app/page/publication-view/publication-view.actions';
import { publicationActivitiesSelectors } from '../../../../app/resource/publication-activities/publication-activities.selectors';
import { buildCollectionId } from '../../../../app/resource/publication-activities/publication-activities.saga-service';
import { authSelectors } from '../../../../app/auth/auth.selectors';
import { saveActivity } from '../../../../app/page/publication-view/publication-view.actions';
import { TActivityAction } from '../../../../app/resource/activity/activity.types';
import { Comments } from './Comments';

export const PublicationView: FunctionComponent<IPublicationViewProps> = ({ publicationId }) => {
  const classes = usePublicationViewStyle();
  const dispatch = useDispatch();

  const currentUserId = useSelect(authSelectors.selectLoggedUser);
  const collectionIds = useMemo(
    () => [
      buildCollectionId(publicationId, 'likes'),
      buildCollectionId(publicationId, 'dislikes'),
      buildCollectionId(publicationId, 'comments'),
    ],
    [publicationId],
  );

  const publication = useSelectWithParams(publicationSelectors.selectResourceById, publicationId);
  const [likesCollection, dislikesCollection, commentCollection] = useSelectWithParams(
    publicationActivitiesSelectors.selectResourcesById,
    collectionIds,
  );

  const handleActivity = useCallback(
    (action: TActivityAction, comment?: string) => {
      if (currentUserId) {
        dispatch(saveActivity({ action, publication: publicationId, text: comment }));
      }
    },
    [currentUserId, dispatch, publicationId],
  );

  const handleAddComment = useCallback(
    (comment: string) => {
      handleActivity('comment', comment);
    },
    [handleActivity],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeft, showRight] = useMemo(
    () => [currentIndex > 0, publication ? currentIndex < publication.pictures.length - 1 : false],
    [currentIndex, publication],
  );

  const onLeft = useCallback(() => {
    setCurrentIndex((temp) => temp - 1);
  }, [setCurrentIndex]);

  const onRight = useCallback(() => {
    setCurrentIndex((temp) => temp + 1);
  }, [setCurrentIndex]);

  useEffect(() => {
    dispatch(setupPublicationView(publicationId));
  }, [dispatch, publicationId]);

  return (
    publication && (
      <div>
        <div className={classes.imageWrapper}>
          <div className={classes.left}>
            {showLeft && <ArrowBackIosIcon className={classes.icon} onClick={onLeft} />}
          </div>
          <img className={classes.img} alt={publication.description} src={publication.pictures[currentIndex]} />
          <div className={classes.right}>
            {showRight && <ArrowForwardIosIcon className={classes.icon} onClick={onRight} />}
          </div>
        </div>

        <div className={classes.activitiyIconsWrapper}>
          {likesCollection && <span className={classes.green}>{likesCollection.activities.length}</span>}
          <span className={classes.activityIcon}>
            <ThumbUpAltIcon onClick={() => handleActivity('like')} />
          </span>
          |
          <span className={classes.activityIcon}>
            <ThumbDownIcon onClick={() => handleActivity('dislike')} />
          </span>
          {dislikesCollection && <span className={classes.red}>{dislikesCollection.activities.length}</span>}
        </div>
        <div className={classes.descriptionWrapper}>{publication.description}</div>
        <div className={classes.descriptionWrapper}>
          {commentCollection && <Comments activityIds={commentCollection.activities} onAddComment={handleAddComment} />}
        </div>
      </div>
    )
  );
};
