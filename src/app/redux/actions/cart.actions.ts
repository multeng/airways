import { createAction, props } from '@ngrx/store';
import { Booking, CartActions } from '../../shared/models/cart.model';

export const addBooking = createAction(
  CartActions.ADD_BOOKING,
  props<{ content: Booking }>()
);
