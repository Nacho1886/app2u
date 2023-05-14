import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResponse, Repository, Result } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PhotographerApiService implements Repository<Result> {
  options = {
    headers: {
      Authorization: `Basic ${window.btoa(
        environment.API_USER + ':' + environment.API_PASS
      )}`,
    },
  };

  constructor(private http: HttpClient) {}

  getAll(offset: number = 0, limit: number = 10): Observable<Result[]> {
    return this.http
      .get<ApiResponse>(
        `${environment.API_URL}photographer/?limit=${limit}&offset=${offset}`,
        this.options
      ).pipe(map((res) => res.results));
  }

  getById(id: number): Observable<Result> {
    return this.http.get<Result>(
      `${environment.API_URL}photographer/${id}`,
      this.options
    );
  }

  create(item: Result): Observable<Result> {
    throw new Error('Method not implemented.');
  }

  update(item: Result): Observable<Result> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
