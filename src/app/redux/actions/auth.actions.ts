import { createAction } from '@ngrx/store';

export enum AuthActionsType {
  openAuthModal = '[AUTH] openModal',
  closeAuthModal = '[AUTH] closeModal',
}

export const openAuthModalAction = createAction(AuthActionsType.openAuthModal);
export const closeAuthModalAction = createAction(
  AuthActionsType.closeAuthModal
);
