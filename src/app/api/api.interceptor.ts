import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  apiUrl = 'https://airways-server.onrender.com/';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      url: request.url.replace(
        '/api/',
        window.location.href.includes('localhost')
          ? 'http://localhost:9002/'
          : this.apiUrl
      ),
    });
    return next.handle(cloneRequest);
  }
}
