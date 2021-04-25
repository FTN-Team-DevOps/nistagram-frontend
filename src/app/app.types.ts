import { RouterState, LocationChangeAction } from 'connected-react-router';

import { IApiAction, IApiState } from './api/api.types';
import { IAuthAction, IAuthState } from './auth/auth.types';
import { IDialogAction, IDialogState } from './dialog/dialog.types';
import { IPageAction, IPageState } from './page/page.types';
import { IResourcesAction, IResourcesState } from './resource/resource.types';

export type IAppAction =
  | LocationChangeAction
  | IApiAction
  | IAuthAction
  | IResourcesAction
  | IPageAction
  | IDialogAction;

export interface IAppState {
  api: IApiState;
  auth: IAuthState;
  resource: IResourcesState;
  page: IPageState;
  dialog: IDialogState;
  router: RouterState;
}
