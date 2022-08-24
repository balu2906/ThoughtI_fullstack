import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  API_URL = environment.API_URL;
  Client = environment.client;
  constructor(private httpClient: HttpClient, private router: Router) {}

  getHeaders() {
    const options = { headers: {}, withCredentials: true };
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = environment.client;
    options.headers['Access-Control-Allow-Credentials'] = 'true';
    options.headers['Access-Control-Allow-Headers'] = 'Content-Type';
    // options.headers['Authorization'] = 'Bearer xx.yy.xx';
    return options;
  }
  getHeadersFormData() {
    const options = { headers: {}, withCredentials: true };
    options.headers['Access-Control-Allow-Origin'] = environment.client;
    options.headers['Access-Control-Allow-Credentials'] = 'true';
    options.headers['Access-Control-Allow-Headers'] = 'Content-Type';
    return options;
  }

  getInfo(api): Observable<any> {
    return this.httpClient
      .get(this.API_URL + api, this.getHeaders())
      .pipe(catchError(this.handleError));
  }

  post(api, data): Observable<any> {
    console.log('data in post', data);
    return this.httpClient
      .post(this.API_URL + api, data, this.getHeaders())
      .pipe(catchError(this.handleError));
  }

  put(api, data): Observable<any> {
    return this.httpClient
      .put(this.API_URL + api, data, this.getHeaders())
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let error_message = error.error.message;

    alert(error.error.message);
    if (error.status === 403) {
      window.open(`${this.Client}`, '_self');
    }
    return throwError({ message: error_message, status: error.status });
  }
}
