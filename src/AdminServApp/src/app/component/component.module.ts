import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { IntervenantsComponent } from './intervenants/intervenants.component';
import { SitComponent } from './sit/sit.component';
import { ClientsComponent } from './clients/clients.component';
import { PlanningComponent } from './planning/planning.component';
import { RapportComponent } from './rapport/rapport.component';
import { AddsitComponent } from './addsit/addsit.component';
import { AddplanningComponent } from './addplanning/addplanning.component';
import { UpdateclientsComponent } from './updateclients/updateclients.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    IntervenantsComponent,
    SitComponent,
    ClientsComponent,
    PlanningComponent,
    RapportComponent,
   
    
    
    
  ]
})

export class ComponentsModule {}