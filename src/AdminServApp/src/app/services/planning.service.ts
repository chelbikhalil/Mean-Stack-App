import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { planning } from '../models/planning.model';

@Injectable()
export class PlanningService {

  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getplanning(){

    return this.http.get<planning[]>(`${this.domaine}/api/planning`)
    .map(res => res);
  }
  addplanning(newplanning: planning){
   return this.http.post<planning>(`${this.domaine}/api/planning`, newplanning)
    .map(res => res)
  }
  deleteplanning(id){
    return this.http.delete<planning>(`${this.domaine}/api/planning/${id}`)
    .map(res => res)
  }
  updateplanning(newplanning: planning){

    return this.http.put(`${this.domaine}/api/planning/${newplanning.id}`, newplanning)
    .map(res => res)
  }

}

