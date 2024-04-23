import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getpurchasehistory() {
    return this.http.get(this.url + 'purchase-history');
  }
  getfuturediscounts() {
    return this.http.get(this.url + 'future-discounts');
  }
}
