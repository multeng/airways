import { TypeOfFlight } from '../../../constants';

export default class Flight {
  constructor(
    public id: number,
    public type: TypeOfFlight,
    public destinationFrom: string,
    public destinationTo: string,
    public departureDate: Date,
    public returnDate: Date | null,
    public costUSD: number,
    public freePlace: number
  ) {}
}
