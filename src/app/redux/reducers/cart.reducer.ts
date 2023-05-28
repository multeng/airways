import { createReducer, on } from '@ngrx/store';
import { Booking } from '../../shared/models/cart.model';
import { TripType } from '../../shared/models/main-page.model';
import { addBooking, removeBooking } from '../actions/cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  addedBookings: Booking[];
  completeBookings: Booking[];
  promo: string[];
}

const mockBooking: Booking = {
  flightNumber: '111',
  flight: 'Moscow - Norilsk',
  tripType: TripType.oneWay,
  date: '01.06.2023',
  passengers: {
    adult: 1,
    children: 1,
    infant: 0,
  },
  price: 500,
};

const mockBookingTwo = {
  flightNumber: '654',
  flight: 'Barnaul - Magadan',
  tripType: TripType.oneWay,
  date: '05.06.2023',
  passengers: {
    adult: 2,
    children: 0,
    infant: 0,
  },
  price: 700,
};

const mockBookingThree = {
  flightNumber: '123',
  flight: 'Baku - Kursk',
  tripType: TripType.round,
  date: '09.06.2023',
  passengers: {
    adult: 1,
    children: 0,
    infant: 0,
  },
  price: 900,
};

const initialState: CartState = {
  addedBookings: [mockBooking, mockBookingTwo, mockBookingThree],
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
  ),
  on(
    removeBooking,
    (state, { content }): CartState => ({
      ...state,
      addedBookings: [...state.addedBookings].filter(
        (elem) => elem.flightNumber !== content.flightNumber
      ),
    })
  )
);
