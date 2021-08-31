import React, { useCallback } from 'react';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { userSelectors } from '../../../../app/resource/user/user.selectors';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { useUserStyles } from './styles';
import { IUserProps } from './types';

export const User: FunctionComponent<IUserProps> = ({ userId }) => {
  const classes = useUserStyles();
  const user = useSelectWithParams(userSelectors.selectResourceById, userId);
  const history = useHistory();

  const redirectToProfile = useCallback(() => {
    history.push(`/profile/${userId}`);
  }, [history, userId]);

  return (
    user && (
      <div className={classes.wrapper} onClick={redirectToProfile}>
        <img className={classes.img} src={user.picture} alt={user.name} />
        <span className={classes.name}>{`${user.name} (${user.username})`}</span>
      </div>
    )
  );
};
