import User from './app/shared/models/user.model';

export enum TypeOfFlight {
  oneWay = 'one-way',
  roundTrip = 'round-trip',
}

export enum ApiPath {
  Users = '/api/users',
  Airports = '/api/airports',
  Flying = '/api/flying',
  generateFlights = '/api/gen-fly/',
  emailValidation = '/api/validate',
  registration = '/api/registration',
  login = '/api/login',
}

export enum AuthActionsType {
  openAuthModal = '[AUTH] openModal',
  closeAuthModal = '[AUTH] closeModal',
  register = '[AUTH] register',
  registerSuccess = '[AUTH] registerSuccess',
  registerFailure = '[AUTH] registerFailure',
  login = '[AUTH] login',
  loginSuccess = '[AUTH] loginSuccess',
  loginFailure = '[AUTH] loginFailure',
  logOut = '[AUTH] logOut',
}

export interface DecodedToken {
  user: Omit<User, 'password'>;
  iat: number;
  exp: number;
}

export enum StatusMessages {
  successfullyLogin = 'You are successfully login',
  successfullyRegistred = 'You are successfully registered',
  failureLogin = "You can't login, error: ",
  failureRegister = "You can't register, error: ",
}

export enum UserMenu {
  Purchases = 'Purchases',
  Logout = 'Logout',
}
