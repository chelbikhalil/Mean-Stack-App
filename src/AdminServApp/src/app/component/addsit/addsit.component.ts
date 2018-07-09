import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SitService } from '../../services/sit.service';
import { Router } from '@angular/router';
import { sit } from '../../models/sit.model';
import { clients } from '../../models/clients.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-addsit',
  templateUrl: './addsit.component.html',
  styleUrls: ['./addsit.component.css']
})
export class AddsitComponent implements OnInit {

  sit = [];
  clients = [];

  technologie :string;
nomResponsableSit: string;
numResponsableSit: string;
longitude: string;
latitude : string;
Chassis: string;
newsit : sit;

  constructor(private SitService: SitService, private router:Router, private clientsservice : ClientsService ) { 
    this.clientsservice.getclients()
    .subscribe(clients =>{
    this.clients = clients
  })
}

  ngOnInit() {
   
  }
  public addsit(f: NgForm){
    // console.log(f.value);
 this.newsit = {
   
   nomC : f.value.nomC,
   technologie : f.value.technologie,
    nomResponsableSit :f.value.nomResponsableSit,
   numResponsableSit : f.value.numResponsableSit,
   longitude: f.value.longitude,
   latitude: f.value.latitude,
   Chassis : f.value.Chassis,
 }
 console.log(this.newsit);
  this.SitService.addsit(this.newsit)
     .subscribe( sit => {
     this.sit.push(this.newsit);
     this.router.navigate(['/component/sit']);
     
     });
     
   }
}
