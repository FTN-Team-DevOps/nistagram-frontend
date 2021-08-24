import { createActionConst } from '../../../utils/action.utils';

const ACTIVITY_NAMESPACE = 'ACTIVITY';

export const STORE_ACTIVITY = createActionConst(ACTIVITY_NAMESPACE, 'STORE_ACTIVITY');
export const CLEAR_ACTIVITY = createActionConst(ACTIVITY_NAMESPACE, 'CLEAR_ACTIVITY');
