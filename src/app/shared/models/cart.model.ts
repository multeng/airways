import { TripType } from './main-page.model';

export interface Booking {
  flightNumber: string;
  flight: string;
  tripType: TripType;
  date: string;
  passengers: {
    adult: number;
    children: number;
    infant: number;
  };
  price: number;
}

export enum CartActions {
  ADD_BOOKING = 'ADD_BOOKING',
  REMOVE_BOOKING = 'REMOVE_BOOKING',
}
