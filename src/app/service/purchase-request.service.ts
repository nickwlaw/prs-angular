import { Injectable } from '@angular/core';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequest } from '../model/purchase-request.class';
import { User } from '../model/user.class';

const url = 'http://localhost:8080/purchase-requests/';

@Injectable({
  providedIn: 'root'
})

export class PurchaseRequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  listForReview(id: string): Observable<JsonResponse> {
    return this.http.get(url + 'list-review/' + id) as Observable<JsonResponse>;
  }

  create(pr: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url, pr) as Observable<JsonResponse>;
  }

  approve(pr: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url + 'approve', pr) as Observable<JsonResponse>;
  }

  reject(pr: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url + 'reject', pr) as Observable<JsonResponse>;
  }

  edit(pr: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url, pr) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
