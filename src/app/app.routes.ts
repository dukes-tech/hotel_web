import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Contactos } from './features/contactos/contactos';
import { Resenas } from './features/resenas/resenas';
import { Habitaciones } from './features/habitaciones/habitaciones';
import { Servicios } from './features/servicios/servicios';

import { adminChildGuard } from './guards/admin-child-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'nosotros',
    component: Nosotros
  },

  {
    path: 'contactos',
    component: Contactos
  },

  {
    path: 'resenas',
    component: Resenas
  },

  {
    path: 'admin',
    canActivateChild: [adminChildGuard],
    children: [
      {
        path: 'habitaciones/:id',
        component: Habitaciones
      },
      {
        path: 'servicios',
        component: Servicios
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];