import { Routes } from '@angular/router';
import { IntervenantsComponent } from './intervenants/intervenants.component';
import { SitComponent } from './sit/sit.component';
import { PlanningComponent } from './planning/planning.component';
import { RapportComponent } from './rapport/rapport.component';
import { ClientsComponent } from './clients/clients.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
 
    {
      path: 'planning',
      component: PlanningComponent,
      data: {
        title: 'planning',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Gestion Planning'},{title: 'planning'}]
      },
    }, 
    {
      path: 'rapport',
      component: RapportComponent,
      data: {
        title: 'rapport',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Rapport Visite'},{title: 'rapport'}]
      }
    },      
  
    {
      path: 'sit',
      component: SitComponent,
      data: {
        title: 'sit',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Gestion Sit'},{title: 'sit'}]
      }
    },
    {
      path: 'clients',
      component: ClientsComponent,
      data: {
        title: 'clients',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Gestion Clients'},{title: 'clients'}]
      }
    },
     {
      path: 'intervenants',
      component: IntervenantsComponent,
      data: {
        
        title: 'intervenants',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Gestion Intervenants'},{title: 'intervenants'}]
      }
    }]
  }
];
