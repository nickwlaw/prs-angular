import { Injectable } from '@angular/core';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.class';

const url = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(user: User): Observable<JsonResponse> {
    return this.http.post(url, user) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<JsonResponse> {
    return this.http.put(url, user) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

  login(user: User): Observable<JsonResponse> {
    return this.http.post(url + 'authenticate', user) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
