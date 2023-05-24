import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  HeaderReducer,
  HeaderState,
  headerFeatureKey,
} from './reducers/header-settings.reducer';
import {
  authFeatureKey,
  AuthState,
  AuthReducer,
} from './reducers/auth.reducer';

export interface State {
  [headerFeatureKey]: HeaderState;
  [authFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [headerFeatureKey]: HeaderReducer,
  [authFeatureKey]: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
