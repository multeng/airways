import { createAction, props } from '@ngrx/store';
import { Booking, CartActions } from '../../shared/models/cart.model';

export const addBooking = createAction(
  CartActions.ADD_BOOKING,
  props<{ content: Booking }>()
);

export const removeBooking = createAction(
  CartActions.REMOVE_BOOKING,
  props<{ content: Booking }>()
);
