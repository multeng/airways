import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authFeatureKey, AuthState } from '../reducers/auth.reducer';

export const selectAuthStateFeature =
  createFeatureSelector<AuthState>(authFeatureKey);

export const selectIsOpenModal = createSelector(
  selectAuthStateFeature,
  (state) => state.isModalOpen
);

export const selectIsLoggedIn = createSelector(
  selectAuthStateFeature,
  (state) => state.isLoggedIn
);
