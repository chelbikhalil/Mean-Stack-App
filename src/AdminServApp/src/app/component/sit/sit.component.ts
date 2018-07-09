import { Component, OnInit } from '@angular/core';
import { SitService } from '../../services/sit.service';
import { sit } from '../../models/sit.model';
@Component({
  selector: 'app-sit',
  templateUrl: './sit.component.html',
  styleUrls: ['./sit.component.css']
})
export class SitComponent implements OnInit {
 
sit = [];
  SIT = [];
  id : string;
  _id : string;
  nomC: string ;
  technologie :string;
  nomResponsableSit: string;
  numResponsableSit: string;
  longitude : string;
  latitude : string;
  n? : number;
  constructor(private SitService: SitService) { 

this.SitService.getsit()
.subscribe(sit =>{
  this.SIT = sit
})
}
  ngOnInit() {
  }
  deletesit(id){
    //(this.intervenant.filter(d=>d.checked)) {
      const response  =confirm("vous ete sur de supprimer ce client");
      if (response){
  const sit = this.SIT;
  this.SitService.deletesit(id)
  .subscribe(data => {
    if (data.n ==1 ){
      for(let i = 0; i< sit.length; i++){
        if (sit[i]._id == id){
          sit.splice(i , 1);
        }
      }
    }
  })
             
  }
}
}
