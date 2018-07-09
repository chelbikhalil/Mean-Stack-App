import { Component, OnInit } from '@angular/core';
import { intervenant } from '../../models/intervenant.model';
import { intervenantService } from '../../services/intervenants.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-intervenants',
  templateUrl: './intervenants.component.html',
  styleUrls: ['./intervenants.component.css']
})
export class IntervenantsComponent implements OnInit {
  LastName: any;
intervenant : intervenant[];
id : string;
Email : string;
Adresse : string;
Tel: string;
pseudo : string;
cin: number;
  
  constructor(private intervenantservice : intervenantService) {
    this.intervenantservice.getintervenant()
    .subscribe(intervenant =>{
    this.intervenant = intervenant

      })
   }

  ngOnInit() {
  }

  deleteintervenant( id){
    //(this.intervenant.filter(d=>d.checked)) {
      const response  =confirm("vous ete sur de supprimer ce client");
      if (response){
  const intervenant = this.intervenant;
  this.intervenantservice.deleteintervenant(id)
  .subscribe(data => {
    if (data.n == 1 ) {

      for(let i = 0; i< intervenant.length; i++){
        if (intervenant[i]._id == id){
          intervenant.splice(i , 1);
        }
      }
    }
  })
             
  }}
}
