import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import Flight from '../models/flights.model';
import Airport from '../models/airports.model';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /* Error handler */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  /* Returns users from the database */
  getUsers() {
    return this.http
      .get('/api/users')
      .pipe(catchError(this.handleError<User[]>([])));
  }

  /* Returns airports matching the search string */
  getAirports(title: string, quantity = 10, next = 0) {
    return this.http
      .get(`/api/airports?title=${title}&number=${quantity}&skip=${next}`)
      .pipe(catchError(this.handleError<Airport[]>([])));
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
      .get(
        `/api/flying?number=${quantity}&skip=${next}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&oneWay=${oneWay}`
      )
      .pipe(catchError(this.handleError<Flight[]>([])));
  }

  /* Generates the quantity of flights passed in the parameter and returns all flights */
  generateFlights(quantity = 100) {
    return this.http
      .get(`/api/gen-fly/${quantity}`)
      .pipe(catchError(this.handleError<Flight[]>([])));
  }
}
