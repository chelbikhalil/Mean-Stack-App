import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from '../models/user.model'
@Injectable()
export class UserService {

  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getuser(){

    return this.http.get<user[]>(`${this.domaine}/api/user`)
    .map(res => res); 
    
}
}
