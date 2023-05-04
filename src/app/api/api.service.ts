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

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUsers() {
    return this.http
      .get('/api/users')
      .pipe(catchError(this.handleError<User[]>([])));
  }

  getAirports(title: string, number = 10, next = 0) {
    return this.http
      .get(`/api/airports?title=${title}&number=${number}&skip=${next}`)
      .pipe(catchError(this.handleError<Airport[]>([])));
  }

  getFlights(
    startDate: Date,
    endDate: Date,
    oneWay: boolean,
    number = 10,
    next = 0
  ) {
    return this.http
      .get(
        `/api/flying?number=${number}&skip=${next}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&oneWay=${oneWay}`
      )
      .pipe(catchError(this.handleError<Flight[]>([])));
  }
}
