import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { planning } from '../../models/planning.model';
import { PlanningService } from '../../services/planning.service';
import { Router } from '@angular/router';
import { SitService } from '../../services/sit.service';
import { sit } from '../../models/sit.model';
import { ClientsService } from '../../services/clients.service';
import { clients } from '../../models/clients.model';
import { intervenantService } from '../../services/intervenants.service';
import { intervenant } from '../../models/intervenant.model';

@Component({
  selector: 'app-addplanning',
  templateUrl: './addplanning.component.html',
  styleUrls: ['./addplanning.component.css']
})
export class AddplanningComponent implements OnInit {
  _idsit:string;
  chassis: string;
  FirstName: string;
  technologie : string;
  nomC : string;
  n? : number;
  date : string;  
  heure : string;
  description : string;
  planning = [];
  SIT = [];
  sit =[];
  clients =[];
  intervenant =[];
  newplanning : planning;
  constructor(private PlanningService : PlanningService,private intervenantservice:intervenantService, private ClientsService:ClientsService ,private router : Router, private SitService: SitService) {
  this.SitService.getsit()
 .subscribe(sit =>{
  this.SIT = sit
   })
   this.intervenantservice.getintervenant()
   .subscribe(intervenant =>{
   this.intervenant = intervenant
   })
   this.ClientsService.getclients()
      .subscribe(clients =>{
      this.clients = clients
  })
}
  ngOnInit() {
  }
  public addplanning(f: NgForm){
    // console.log(f.value);
 this.newplanning = {
  
   nomC : f.value.nomC,
   _idsit : f.value._idsit,
    chassis : f.value.chassis, 
    technologie : f.value.technologie,
    date : f.value.date,
    heure : f.value.heure,
    FirstName : f.value.FirstName,
    description : f.value.description,
 }
 console.log(this.newplanning.nomC);
  this.PlanningService.addplanning(this.newplanning)
     .subscribe(planning => {
     this.planning.push(this.newplanning);
     this.router.navigate(['/component/planning']);
     
     });
     
   }

}
