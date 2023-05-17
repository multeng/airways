import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HeaderReducer, HeaderState } from './reducers/header-settings.reducer';
import {
  authFeatureKey,
  AuthState,
  AuthReducer,
} from './reducers/auth.reducer';

export interface State {
  headerSettingsState: HeaderState;
  [authFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  headerSettingsState: HeaderReducer,
  [authFeatureKey]: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
