export enum TripType {
  oneWay = 'One Way',
  round = 'Round Trip',
}

export interface Airport {
  id: number;
  ICAO: string;
  name: string;
  city: string;
  state: string;
}
