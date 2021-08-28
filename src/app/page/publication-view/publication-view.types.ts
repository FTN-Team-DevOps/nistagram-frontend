import { IActivitySave } from '../../resource/activity/activity.types';
import { IPublication } from '../../resource/publication/publication.types';

import * as constants from './publication-view.constants';

export interface ISetupPublicationView {
  type: typeof constants.SETUP_PUBLICATION_VIEW;
  payload: IPublication['_id'];
}

export interface ISaveActivity {
  type: typeof constants.SAVE_ACTIVITY;
  payload: { id?: string; data: IActivitySave };
}
