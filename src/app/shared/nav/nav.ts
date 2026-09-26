import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';

import { auth } from '../../services/firebase';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit, OnDestroy {

  usuario: User | null = null;

  private unsubscribe?: () => void;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      this.usuario = user;
    });

  }

  async cerrarSesion(): Promise<void> {

    try {

      await signOut(auth);

      this.usuario = null;

      await this.router.navigate(['/login']);

    } catch (error) {

      console.error('Error al cerrar sesión:', error);

    }
  }

  ngOnDestroy(): void {
    this.unsubscribe?.();
  }
}