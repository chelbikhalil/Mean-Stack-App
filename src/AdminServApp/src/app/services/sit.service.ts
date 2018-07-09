import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import {sit} from '../models/SIT.model'

@Injectable()
export class SitService {

  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getsit(){

    return this.http.get<sit[]>(`${this.domaine}/api/sit`)
    .map(res => res); 
    
  }
  
  addsit(newsit: sit){
   return this.http.post<sit>(`${this.domaine}/api/sit`, newsit)
    .map(res => res)
  }
  deletesit(id){
    return this.http.delete<sit>(`${this.domaine}/api/sit/${id}`)
    .map(res => res)
  }
  updatesit(newsit: sit){

    return this.http.put(`${this.domaine}/api/SIT/${newsit.id}`, newsit)
    .map(res => res)
  }



}
