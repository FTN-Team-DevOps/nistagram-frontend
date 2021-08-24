import { Button } from '@material-ui/core';
import React, { FunctionComponent, useMemo, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authSelectors } from '../../../app/auth/auth.selectors';
import { openDialog } from '../../../app/dialog/dialog.actions';
import { createPublication } from '../../../app/page/profile/profile.actions';
import { profilePageSelectors } from '../../../app/page/profile/profile.selectors';
import { IPublicationCreate } from '../../../app/resource/publication/publication.types';
import { userSelectors } from '../../../app/resource/user/user.selectors';
import { defaultPhoto } from '../../../utils/photo.util';
import { useSelect, useSelectWithParams } from '../../../utils/selector.utils';
import { PageLayout } from '../common/PageLayout';
import { useProfilePageStyle } from './style';
import { IProfilePageProps } from './types';

export const ProfilePage: FunctionComponent = () => {
  const { userId } = useParams<IProfilePageProps>();
  const classes = useProfilePageStyle();
  const dispatch = useDispatch();

  const publicationIds = useSelect(profilePageSelectors.selectSearchedPublications);

  const currentUserId = useSelect(authSelectors.selectLoggedUser);
  const user = useSelectWithParams(userSelectors.selectResourceById, userId);

  const isCurrentUserProfile = useMemo(() => currentUserId === userId, [currentUserId, userId]);
  const isPrivate = useMemo(() => !isCurrentUserProfile && user && user.private, [isCurrentUserProfile, user]);

  useEffect(() => {
    console.log(userId, isCurrentUserProfile, user);
  }, [isCurrentUserProfile, user, userId]);

  const openPublicationDialog = useCallback(() => {
    dispatch(
      openDialog('publicationDialog', {
        onSubmit: (data: IPublicationCreate) => {
          dispatch(createPublication(data));
        },
      }),
    );
  }, [dispatch]);

  console.log(publicationIds);

  return (
    <PageLayout>
      {user && (
        <>
          <header className={classes.headerWrapper}>
            <div className={classes.photoWrapper}>
              <img className={classes.profilePhoto} alt="Profile" src={user.picture ?? defaultPhoto} />
              {isCurrentUserProfile && (
                <>
                  <Button className={classes.editButton} variant="outlined">
                    Edit
                  </Button>
                  <Button className={classes.editButton} variant="outlined" onClick={openPublicationDialog}>
                    Add Publication
                  </Button>
                </>
              )}
            </div>
            <div className={classes.textWrapper}>
              <h1 className={classes.nickname}>
                {user.name} (<span className={classes.name}>{user.username}</span>)
              </h1>
              <p className={classes.biography}>&ldquo;{user.biography}&rdquo;</p>
            </div>
          </header>
        </>
      )}
    </PageLayout>
  );
};
