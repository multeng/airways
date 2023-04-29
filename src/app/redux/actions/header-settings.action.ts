import { createAction, props } from '@ngrx/store';
import {
  Currencies,
  DateFormat,
  HeaderActions,
} from 'src/app/shared/models/header.model';

export const updateCurrency = createAction(
  HeaderActions.UPDATE_CURRENCY,
  props<{ content: Currencies }>()
);

export const updateDateFormat = createAction(
  HeaderActions.UPDATE_DATE_FORMAT,
  props<{ content: DateFormat }>()
);

export const showProgress = createAction(
  HeaderActions.SHOW_PROGRESS,
  props<{ content: null | string }>()
);
