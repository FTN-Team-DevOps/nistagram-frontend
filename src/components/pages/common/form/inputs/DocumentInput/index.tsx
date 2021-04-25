import React, { FunctionComponent } from 'react';
import { IFormDocumentInputProps } from './types';
import { AccountCircle } from '@material-ui/icons';
import { useDocumentInputClasses } from './styles';
import { Avatar } from '../../../Avatar';

export const DocumentInput: FunctionComponent<IFormDocumentInputProps> = ({ previewUrl, tooltip, name, onChange }) => {
  const classes = useDocumentInputClasses();

  return (
    <div>
      <label htmlFor="upload-button">
        <div className={classes.logo}>
          {previewUrl ? (
            <Avatar
              className={classes.previewImage}
              src={previewUrl}
              size="medium"
              skipSrcWrap={!previewUrl.startsWith('data:')}
            />
          ) : (
            <AccountCircle className={classes.logoNotSetIcon} />
          )}
          <span className={classes.tooltip}>{tooltip}</span>
        </div>
      </label>
      <input style={{ display: 'none' }} id="upload-button" type="file" name={name} onChange={onChange} />
    </div>
  );
};
