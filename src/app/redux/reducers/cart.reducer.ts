import { createReducer, on } from '@ngrx/store';
import { Booking } from 'src/app/shared/models/cart.model';
import { addBooking } from '../actions/cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  addedBookings: Booking[];
  completeBookings: Booking[];
  promo: string[];
}

const initialState: CartState = {
  addedBookings: [],
  completeBookings: [],
  promo: [],
};

export const CartReducer = createReducer(
  initialState,
  on(
    addBooking,
    (state, { content }): CartState => ({
      ...state,
      addedBookings: [...state.addedBookings, content],
    })
  )
);
