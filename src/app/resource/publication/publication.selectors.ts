import { generateResourceSelectors } from '../generators/resource.selectors';

import * as types from './publication.types';

export const publicationSelectors = {
  ...generateResourceSelectors<types.IPublication>((state) => state.resource.publication),
};
