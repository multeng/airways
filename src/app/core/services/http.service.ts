import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from '../../shared/models/main-page.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  fetch(text: string) {
    const query = {
      title: text,
      number: 10,
      skip: 0,
    };
    return this.http.get<Airport[]>(`http://localhost:9002/airports`, {
      params: query,
    });
  }
}
