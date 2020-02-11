import { Injectable } from '@angular/core';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.class';

const url = 'http://localhost:8080/vendors/';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(url, vendor) as Observable<JsonResponse>;
  }

  edit(vendor: Vendor): Observable<JsonResponse> {
    return this.http.put(url, vendor) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
