import { createReducer, on } from '@ngrx/store';
import { Currencies, DateFormat } from '../../shared/models/header.model';
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
  on(
    updateCurrency,
    (state, { content }): HeaderState => ({
      ...state,
      currency: content,
    })
  ),
  on(
    updateDateFormat,
    (state, { content }): HeaderState => ({
      ...state,
      dateFormat: content,
    })
  ),
  on(
    showProgress,
    (state, { content }): HeaderState => ({
      ...state,
      progress: content,
    })
  )
);
