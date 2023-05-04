import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

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
      .pipe(catchError(this.handleError<any>([])));
  }

  getAirports(title: string, number = 10, next = 0) {
    return this.http
      .get(`/api/airports?title=${title}&number=${number}&skip=${next}`)
      .pipe(catchError(this.handleError<any>([])));
  }
}
