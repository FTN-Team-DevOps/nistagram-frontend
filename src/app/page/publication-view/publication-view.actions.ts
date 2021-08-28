import * as types from './publication-view.types';
import * as constants from './publication-view.constants';
import { IPublication } from '../../resource/publication/publication.types';
import { IActivity, IActivitySave } from '../../resource/activity/activity.types';

export const setupPublicationView = (publicationId: IPublication['_id']): types.ISetupPublicationView => ({
  type: constants.SETUP_PUBLICATION_VIEW,
  payload: publicationId,
});

export const saveActivity = (activity: IActivitySave, id?: IActivity['_id']): types.ISaveActivity => ({
  type: constants.SAVE_ACTIVITY,
  payload: { id, data: activity },
});
