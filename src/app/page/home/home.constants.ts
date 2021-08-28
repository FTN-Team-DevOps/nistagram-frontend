import { createActionConst } from '../../../utils/action.utils';

const HOME_NAMESPACE = 'PROFILE';

export const SETUP_HOME_PAGE = createActionConst(HOME_NAMESPACE, 'SETUP_HOME_PAGE');

export const STORE_SEARCHED_PUBLICATIONS = createActionConst(HOME_NAMESPACE, 'STORE_SEARCHED_PUBLICATIONS');
export const CLEAR_SEARCHED_PUBLICATIONS = createActionConst(HOME_NAMESPACE, 'CLEAR_SEARCHED_PUBLICATIONS');
