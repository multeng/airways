export class Airports {
  constructor(
    public id: number,
    public icao: string,
    public name: string,
    public city: string,
    public state: string,
    public country: string
  ) {}
}
