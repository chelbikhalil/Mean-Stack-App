import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import{rapport} from '../models/rapport.model'

@Injectable()
export class RapportService {

  domaine : string = "http://localhost:3000";
  constructor(private http : HttpClient) { }
  getrapport() {
    return this.http.get<rapport[]>(`${this.domaine}/api/rapport`)
    .map(res => res); 

}
}
