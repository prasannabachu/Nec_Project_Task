import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  UserReqBody } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users';
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return (this.http.get(this.baseUrl));
  }
  public registerUser(reqBody:UserReqBody): Observable<any> {
    return (this.http.post<UserReqBody>(this.baseUrl, reqBody));
  }
}
