import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  HeaderReducer,
  HeaderState,
  headerFeatureKey,
} from './reducers/header-settings.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  [headerFeatureKey]: HeaderState;
}

export const reducers: ActionReducerMap<State> = {
  [headerFeatureKey]: HeaderReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
