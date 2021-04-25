import { createActionConst } from '../../../utils/action.utils';

const USER_NAMESPACE = 'USER';

export const STORE_USER = createActionConst(USER_NAMESPACE, 'STORE_USER');
export const CLEAR_USER = createActionConst(USER_NAMESPACE, 'CLEAR_USER');
