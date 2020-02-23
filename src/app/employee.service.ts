import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getEmployee(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users/2').pipe(delay(10000));
  }
}
