import React, { FunctionComponent } from 'react';
import { getDocumentPath } from '../../../../utils/documents.util';
import { IAvatarProps } from './types';

export const Avatar: FunctionComponent<IAvatarProps> = ({ src, size, skipSrcWrap, className }) => {
  const dimension = size === 'tiny' ? 32 : size === 'small' ? 64 : size === 'medium' ? 128 : 256;

  return (
    <img
      className={className}
      src={skipSrcWrap ? src : getDocumentPath(src)}
      alt="logo"
      height={dimension}
      width={dimension}
    />
  );
};
