import { Component, OnInit } from '@angular/core';
import { intervenant } from '../../models/intervenant.model';
import { intervenantService } from '../../services/intervenants.service';
import { IntervenantsComponent } from '../intervenants/intervenants.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-addintervenant',
  templateUrl: './addintervenant.component.html',
  styleUrls: ['./addintervenant.component.css'],
  providers: [intervenantService],
})
export class AddintervenantComponent implements OnInit {

 

intervenant = [];
FirstName : string;
id : string
Email : string;
Adresse : string;
Tel: string;
mdp :string;
pseudo : string;
cin: number;
newintervenant : intervenant;
  constructor(private intervenantService : intervenantService,  private router: Router) { 
  }
  ngOnInit() {}
  public addintervenant(f: NgForm){
    // console.log(f.value);
 this.newintervenant = {
   
  FirstName  : f.value.FirstName ,
  Email :f.value.Email,
  Adresse : f.value.Adresse,
  Tel : f.value.Tel,
  mdp : f.value.mdp,
  pseudo : f.value.pseudo,
  cin : f.value.cin,

 }
 console.log(this.newintervenant);
  this.intervenantService.addintervenant(this.newintervenant)
     .subscribe(intervenant => {
     this.intervenant.push(this.newintervenant);
     this.router.navigate(['/component/intervenants']);
     
     });
     
   }
}
