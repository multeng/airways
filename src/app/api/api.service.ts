import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import Flight from '../models/flights.model';
import Airport from '../models/airports.model';
import User from '../models/user.model';
import StatusResponse from '../models/status-response';
import { ApiPath } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {}

  /* Error handler */
  private static handleError<T>(result?: T) {
    return (error: unknown): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  /* Returns users from the database */
  getUsers() {
    return this.http
      .get(ApiPath.Users)
      .pipe(catchError(ApiService.handleError<User[]>([])));
  }

  /* Returns airports matching the search string */
  getAirports(title: string, quantity = 10, next = 0) {
    return this.http
      .get(ApiPath.Airports, {
        params: { title, number: quantity, skip: next },
      })
      .pipe(catchError(ApiService.handleError<Airport[]>([])));
  }

  /* Returns flights that match the given parameters */
  getFlights(
    startDate: Date,
    endDate: Date,
    oneWay: boolean,
    quantity = 10,
    next = 0
  ) {
    return this.http
      .get(ApiPath.Flying, {
        params: {
          number: quantity,
          skip: next,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          oneWay,
        },
      })
      .pipe(catchError(ApiService.handleError<Flight[]>([])));
  }

  /* Generates the quantity of flights passed in the parameter
  and returns all flights */
  generateFlights(quantity = 100) {
    return this.http
      .get(ApiPath.generateFlights.concat(quantity.toString()))
      .pipe(catchError(ApiService.handleError<Flight[]>([])));
  }

  /* Checks if the user with the given email exists in the database */
  checkEmail(email: string) {
    return this.http
      .post(ApiPath.emailValidation, { email })
      .pipe(
        catchError(ApiService.handleError<StatusResponse>(<StatusResponse>{}))
      );
  }

  /* Registration for a new user */
  registerNewUser(user: User) {
    return this.http
      .post(ApiPath.registration, {
        firstName: user.firstName,
        email: user.email,
        lastName: user.lastName,
        birthDate: user.birthDate.toISOString(),
        gender: user.gender,
        phone: user.phone,
        password: user.password,
      })
      .pipe(
        catchError(ApiService.handleError<StatusResponse>(<StatusResponse>{}))
      );
  }

  /* User's login by email and password, returns an authentication
  key containing the user's data or 401 (Unauthorized) error */
  login(email: string, password: string) {
    return this.http
      .post(ApiPath.login, {
        email,
        password,
      })
      .pipe(
        catchError(
          ApiService.handleError<{ access_token: string }>(
            <{ access_token: string }>{}
          )
        )
      );
  }
}
