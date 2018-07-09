import { RouteInfo } from './sidebar.metadata';
import { Component } from '@angular/core';
import { AddintervenantComponent } from '../../component/addintervenant/addintervenant.component';

export const ROUTES: RouteInfo[] = [
    {
        path: '/', title: ' Page', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
   {
        path: '', title: 'Planning', icon: 'fa fa-calendar', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           
            { path: '/component/planning', title: 'Gérer Plannig', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },


        ]
    }
    ,{
        path: '', title: 'Rapport Visite', icon: 'fa fa-bar-chart-o', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           
            { path: '/component/rapport', title: 'Gérer Rapport', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/card', title: 'Générer Rapport Compar', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }
    ,{
        path: '', title: 'Intervenant', icon: 'fa fa-male', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           
            { path: '/component/intervenants', title: 'Gérer Intervenant', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
           
        ]
    }
    ,{
        path: '', title: 'SIT', icon: 'fa fa-desktop', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           
            { path: '/component/sit', title: 'Gérer SIT', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },       
        ]
    }
    ,{
        path: '', title: 'Clients', icon: 'fa fa-users', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
           
            { path: '/component/clients', title: 'Gérer Client', icon: 'fa fa-edit', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
       
        ]
    }
        ];

