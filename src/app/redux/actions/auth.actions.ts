import { createAction, props } from '@ngrx/store';
import User from '../../shared/models/user.model';
import { AuthActionsType } from '../../../constants';

export const openAuthModalAction = createAction(AuthActionsType.openAuthModal);
export const closeAuthModalAction = createAction(
  AuthActionsType.closeAuthModal
);

export const registerAction = createAction(
  AuthActionsType.register,
  props<{ user: User }>()
);

export const registerSuccessActions = createAction(
  AuthActionsType.registerSuccess
);

export const registerSuccessFailure = createAction(
  AuthActionsType.registerFailure,
  props<{ errorMessage: string }>()
);

export const loginAction = createAction(
  AuthActionsType.login,
  props<{ email: string; password: string }>()
);

export const loginSuccessAction = createAction(
  AuthActionsType.loginSuccess,
  props<{ user: Omit<User, 'password'> }>()
);

export const loginFailureAction = createAction(
  AuthActionsType.loginFailure,
  props<{ errorMessage: string }>()
);
