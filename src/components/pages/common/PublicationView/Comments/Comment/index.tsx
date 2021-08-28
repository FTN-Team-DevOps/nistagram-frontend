import { Divider } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { userSelectors } from '../../../../../../app/resource/user/user.selectors';
import { useSelectWithParams } from '../../../../../../utils/selector.utils';
import { useCommentStyle } from './styles';
import { ICommentProps } from './types';

export const Comment: FunctionComponent<ICommentProps> = ({ userId, text }) => {
  const classes = useCommentStyle();
  const user = useSelectWithParams(userSelectors.selectResourceById, userId);
  console.log(user);

  return (
    <div className={classes.comment}>
      {user && (
        <div className={classes.wrapper}>
          <img className={classes.img} src={user.picture} alt={user.name} />
          <span className={classes.name}>{user.name}</span>
        </div>
      )}
      <p className={classes.text}>{text}</p>
      <Divider />
    </div>
  );
};
