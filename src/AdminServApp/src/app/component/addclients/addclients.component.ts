import { Component, OnInit } from '@angular/core';
import {clients} from '../../models/clients.model';
import {ClientsComponent} from '../clients/clients.component';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addclients',
  templateUrl: './addclients.component.html',
  styleUrls: ['./addclients.component.css']
})
export class AddclientsComponent implements OnInit {
 
clients =[];

nomC : string;
Adresse : string;
Type_payement : string;
newclient : clients;
  constructor(private clientsservice: ClientsService, private router: Router) { }

  ngOnInit() {
    
  }
  public addclients(f: NgForm){
    // console.log(f.value);
 this.newclient = {
   
   nomC : f.value.nomC,
   Adresse : f.value.Adresse,
    Type_payement : f.value.Type_payement,
 }
 console.log(this.newclient.nomC);
  this.clientsservice.addclients(this.newclient)
     .subscribe(clients => {
     this.clients.push(this.newclient);
     this.router.navigate(['/component/clients']);
     
     });
     
   }
 }

