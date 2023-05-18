export default class User {
  constructor(
    public firstName: string,
    public email: string,
    public lastName: string,
    public birthDate: Date,
    public gender: string,
    public phone: string | null,
    public password: string,
    public country: string,
    public id = -1
  ) {}
}
