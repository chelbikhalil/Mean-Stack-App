import { Component, OnInit } from '@angular/core';
import { clients } from '../../models/clients.model';
import {ClientsService} from '../../services/clients.service';
import { filter } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: clients[];
  nomc : string;
  id : string;
  _id? : string;
  newclients : clients;
  checked : boolean;
  public inactive:boolean = true;
    
    constructor(private ClientsService : ClientsService) {
      this.ClientsService.getclients()
      .subscribe(clients =>{
      this.clients = clients
  console.log(clients);
        })
     }
  

  ngOnInit() {
  }


deleteclients(id){
  const response  =confirm("vous ete sur de supprimer ce client");
  if (response){
const clients = this.clients;

this.ClientsService.deleteclients(id)
.subscribe(data => {
  if (data.n ==1 ){
    for(let i = 0; i< clients.length; i++){
      if (clients[i]._id == id){
        clients.splice(i , 1);
      }
    }
  }
      })
     
    }
  }


  updateclients(clients : clients){
    const newclients ={
      _id : clients._id,
      nomC : clients.nomC,
      Adresse : clients.Adresse,
      type_payement : clients.Type_payement,
     checked : !clients.checked
     
      
    };
    console.log(this._id)
    this.ClientsService.updateclients(newclients)
    .subscribe(res => {
      clients.checked = !clients.checked 
      
    });
   
    }


    changeStatus(){
      this.inactive = false;
   }
  }


