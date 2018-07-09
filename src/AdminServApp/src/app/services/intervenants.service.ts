import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import { intervenant } from '../models/intervenant.model';
@Injectable()
export class intervenantService {


  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getintervenant(){

    return this.http.get<intervenant[]>(`${this.domaine}/api/intervenant`)
    .map(res => res);
  }
  addintervenant(newintervenant: intervenant){
   return this.http.post<intervenant>(`${this.domaine}/api/intervenant`, newintervenant)
    .map(res => res)
  }
  deleteintervenant(id){
    return this.http.delete<intervenant>(`${this.domaine}/api/intervenant/${id}`)
    .map(res => res)
  }
  updateintervenant(newintervenant: intervenant){

    return this.http.put(`${this.domaine}/api/intervenant/${newintervenant.id}`, new intervenant)
    .map(res => res)
  }

}
