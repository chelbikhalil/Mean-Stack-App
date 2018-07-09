import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import { clients } from '../models/clients.model';
@Injectable()
export class ClientsService {

 
  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getclients(){

    return this.http.get<clients[]>(`${this.domaine}/api/clients`)
    .map(res => res);
  }
  addclients(newclients: clients){
   return this.http.post<clients>(`${this.domaine}/api/clients`, newclients)
    .map(res => res)
  }
  deleteclients(id){
    return this.http.delete<clients>(`${this.domaine}/api/clients/${id}`)
    .map(res => res)
  }
  updateclients(newclients : clients){

    return this.http.put(`${this.domaine}/api/clients/${newclients._id}`, newclients)
    .map(res => res)
  }

}
