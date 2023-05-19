import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HeaderState,
  headerFeatureKey,
} from '../reducers/header-settings.reducer';

export const selectHeaderStateFeature =
  createFeatureSelector<HeaderState>(headerFeatureKey);

export const selectCurrency = createSelector(
  selectHeaderStateFeature,
  (state) => state.currency
);

export const selectDate = createSelector(
  selectHeaderStateFeature,
  (state) => state.dateFormat
);

export const selectProgress = createSelector(
  selectHeaderStateFeature,
  (state) => state.progress
);
