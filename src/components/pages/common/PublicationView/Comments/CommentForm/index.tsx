import React, { FunctionComponent, useCallback, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { ICommentFormProps } from './types';
import { useCommentFormStyle } from './style';

export const CommentForm: FunctionComponent<ICommentFormProps> = ({ onSubmit }) => {
  const classes = useCommentFormStyle();
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(() => {
    onSubmit(message);
    setMessage('');
  }, [message, onSubmit]);

  const handleCancel = useCallback(() => {
    setMessage('');
  }, []);

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label="Comment"
        multiline
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={classes.buttonWrapper}>
        <Button className={classes.buttons} onClick={handleCancel} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button className={classes.buttons} onClick={handleSubmit} color="primary" variant="contained">
          Confirm
        </Button>
      </div>
    </div>
  );
};
