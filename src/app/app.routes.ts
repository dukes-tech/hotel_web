import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Contactos } from './features/contactos/contactos';
import { Resenas } from './features/resenas/resenas';
import { Habitaciones } from './features/habitaciones/habitaciones';
import { Servicios } from './features/servicios/servicios';
import { Staff } from './features/staff/staff';

import { Registro } from './pages/registro/registro';
import { Login } from './pages/login/login';

import { adminChildGuard } from './guards/admin-child-guard';
import { authGuard } from './guards/auth-guard';

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

  // REGISTRO
  {
    path: 'registro',
    component: Registro
  },

  // LOGIN
  {
    path: 'login',
    component: Login
  },

  // STAFF - PROTEGIDO CON CANACTIVATE
  {
    path: 'staff',
    component: Staff,
    canActivate: [authGuard]
  },

  // ADMIN
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