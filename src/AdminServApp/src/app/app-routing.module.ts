import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { AddintervenantComponent } from './component/addintervenant/addintervenant.component';
import { intervenant } from './models/intervenant.model';
import { IntervenantsComponent } from './component/intervenants/intervenants.component';
import { AddclientsComponent } from './component/addclients/addclients.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AddsitComponent } from './component/addsit/addsit.component';
import { AddplanningComponent } from './component/addplanning/addplanning.component';
import { StarterComponent } from './starter/starter.component';
import { UpdateclientsComponent } from './component/updateclients/updateclients.component';


export const Approutes: Routes = [
   
{
  
    path: '',
    component: LoginComponent,
},
{
    path:'component',
    component:FullComponent,

   
    children: [
       // { path: 'component', component:AppComponent },
       //{ path: 'starter', redirectTo: '/starter' },


        { path: '', loadChildren: './component/component.module#ComponentsModule' },
        { path:'AddIntervenant' , component: AddintervenantComponent },
        { path:'Addclient' , component: AddclientsComponent },
        { path:'Addsit' , component: AddsitComponent },
        { path:'Addplanning' , component: AddplanningComponent },
        { path:'updateclients' , component: UpdateclientsComponent },
      
     
  
    ]
}
];


