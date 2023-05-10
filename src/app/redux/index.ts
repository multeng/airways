import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HeaderReducer, HeaderState } from './reducers/header-settings.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
  headerSettingsState: HeaderState;
}

export const reducers: ActionReducerMap<State> = {
  headerSettingsState: HeaderReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
