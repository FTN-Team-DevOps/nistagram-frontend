import { createActionConst } from '../../../utils/action.utils';

const PUBLICATION_NAMESPACE = 'PUBLICATION';

export const STORE_PUBLICATION = createActionConst(PUBLICATION_NAMESPACE, 'STORE_PUBLICATION');
export const CLEAR_PUBLICATION = createActionConst(PUBLICATION_NAMESPACE, 'CLEAR_PUBLICATION');
