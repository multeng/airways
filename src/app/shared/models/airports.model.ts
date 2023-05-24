export default class Airport {
  constructor(
    public id: number,
    public ICAO: string,
    public name: string,
    public city: string,
    public state: string,
    public country: string
  ) {}
}
