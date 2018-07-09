import { Component, OnInit } from '@angular/core';
import { PlanningService } from '../../services/planning.service';
import { planning } from '../../models/planning.model';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
id:string;
_id:string;
  _idsit:string;
  chassis: string;
  technologie : string;
  nomC : string;
  n? : number;
  date : string;  
  heure : string;
  description :string;
  planning = [];

  constructor(private planningService: PlanningService) { 
  this.planningService.getplanning()
  .subscribe(planning =>{
  this.planning = planning
  console.log(this.planning);
    })
 }
  ngOnInit() {
  }
  deleteplanning(id){
    //(this.intervenant.filter(d=>d.checked)) {
      const response  =confirm("vous ete sur de supprimer ce client");
      if (response){
  const planning = this.planning;
  this.planningService.deleteplanning(id)
  .subscribe(data => {
    if (data.n ==1 ){
      for(let i = 0; i< planning.length; i++){
        if (planning[i]._id == id){
          planning.splice(i , 1);
        }
      }
    }
  })
             
  }
}

}
