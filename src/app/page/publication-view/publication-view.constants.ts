import { createActionConst } from '../../../utils/action.utils';

const PUBLICATION_VIEW_NAMESPACE = 'PUBLICATION_VIEW';

export const SETUP_PUBLICATION_VIEW = createActionConst(PUBLICATION_VIEW_NAMESPACE, 'SETUP_PUBLICATION_VIEW');
export const SAVE_ACTIVITY = createActionConst(PUBLICATION_VIEW_NAMESPACE, 'SAVE_ACTIVITY');
