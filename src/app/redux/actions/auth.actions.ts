import { createAction, props } from '@ngrx/store';
import User from '../../shared/models/user.model';

export enum AuthActionsType {
  openAuthModal = '[AUTH] openModal',
  closeAuthModal = '[AUTH] closeModal',
  register = '[AUTH] register',
  registerSuccess = '[AUTH] registerSuccess',
  registerFailure = '[AUTH] registerFailure',
}

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
