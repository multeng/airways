import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, cartFeatureKey } from '../reducers/cart.reducer';

export const selectCartStateFeature =
  createFeatureSelector<CartState>(cartFeatureKey);

export const selectAddedBookings = createSelector(
  selectCartStateFeature,
  (state) => state.addedBookings
);

export const selectCompleteBookings = createSelector(
  selectCartStateFeature,
  (state) => state.completeBookings
);

export const selectPromo = createSelector(
  selectCartStateFeature,
  (state) => state.promo
);
