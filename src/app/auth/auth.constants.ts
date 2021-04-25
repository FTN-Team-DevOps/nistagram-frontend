import { createActionConst } from '../../utils/action.utils';

const AUTH_NAMESPACE = 'AUTH';

export const REGISTER = createActionConst(AUTH_NAMESPACE, 'REGISTER');
export const LOGIN = createActionConst(AUTH_NAMESPACE, 'LOGIN');
export const LOGOUT = createActionConst(AUTH_NAMESPACE, 'LOGOUT');

export const STORE_LOGGED_USER = createActionConst(AUTH_NAMESPACE, 'STORE_LOGGED_USER');
export const CLEAR_LOGGED_USER = createActionConst(AUTH_NAMESPACE, 'CLEAR_LOGGED_USER');

export const STORE_ACCESS_TOKEN = createActionConst(AUTH_NAMESPACE, 'STORE_ACCESS_TOKEN');
export const CLEAR_ACCESS_TOKEN = createActionConst(AUTH_NAMESPACE, 'CLEAR_ACCESS_TOKEN');
