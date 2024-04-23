import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
  readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getAllGrocery() {
    return this.http.get(this.url + 'grocery-list');
  }
  getAllConsmatics() {
    return this.http.get(this.url + 'cosmatic-list');
  }
  getAllStationary() {
    return this.http.get(this.url + 'stationary-list');
  }
}
