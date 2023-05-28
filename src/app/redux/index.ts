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
import {
  CartReducer,
  CartState,
  cartFeatureKey,
} from './reducers/cart.reducer';

export interface State {
  [headerFeatureKey]: HeaderState;
  [authFeatureKey]: AuthState;
  [cartFeatureKey]: CartState;
}

export const reducers: ActionReducerMap<State> = {
  [headerFeatureKey]: HeaderReducer,
  [authFeatureKey]: AuthReducer,
  [cartFeatureKey]: CartReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
