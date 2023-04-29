import { createReducer, on } from '@ngrx/store';
import { Currencies, DateFormat } from 'src/app/shared/models/header.model';
import {
  showProgress,
  updateCurrency,
  updateDateFormat,
} from '../actions/header-settings.action';

export interface HeaderState {
  currency: Currencies;
  dateFormat: DateFormat;
  progress: null | string;
}

const initialState: HeaderState = {
  currency: Currencies.RUB,
  dateFormat: DateFormat.DMY,
  progress: null,
};

export const HeaderReducer = createReducer(
  initialState,
  on(updateCurrency, (state, { content }) => ({
    ...state,
    currency: content,
  })),
  on(updateDateFormat, (state, { content }) => ({
    ...state,
    dateFormat: content,
  })),
  on(showProgress, (state, { content }) => ({
    ...state,
    progress: content,
  }))
);
