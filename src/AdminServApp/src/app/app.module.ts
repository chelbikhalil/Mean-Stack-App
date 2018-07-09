import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FormsModule } from '@angular/forms';

import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { intervenantService } from './services/intervenants.service';
import {SitComponent} from './component/sit/sit.component';
import { ClientsService} from './services/clients.service';
import { AddintervenantComponent } from './component/addintervenant/addintervenant.component';
import { IntervenantsComponent } from './component/intervenants/intervenants.component';
import { AddclientsComponent } from './component/addclients/addclients.component';
import { LoginComponent } from './component/login/login.component';
import { SitService } from './services/sit.service';
import { AddsitComponent } from './component/addsit/addsit.component';
import { AddplanningComponent } from './component/addplanning/addplanning.component';
import { PlanningService } from './services/planning.service';
import { StarterComponent } from './starter/starter.component';
import { UpdateclientsComponent } from './component/updateclients/updateclients.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UserService } from './services/user.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {RapportService } from './services/rapport.service';
import {ReactiveFormsModule} from '@angular/forms';
import * as autoTable from 'jspdf-autotable';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    AddintervenantComponent,
    AddclientsComponent,
    LoginComponent,
    AddsitComponent,
    AddplanningComponent,
   StarterComponent,
   UpdateclientsComponent,
   
   
  
  
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),  
    PerfectScrollbarModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
     Ng2SearchPipeModule,
     FlashMessagesModule.forRoot(),
     ToastModule.forRoot(),
     ReactiveFormsModule,
     

    
   
  ],
    
  providers: [
    intervenantService, 
    SitComponent,
    ClientsService,
    SitService,
    PlanningService,
    UserService,
    RapportService,
   
   
   
      {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
