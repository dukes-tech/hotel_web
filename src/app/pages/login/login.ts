import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  cargando = false;
  error = '';

  constructor(private router: Router) {}

  async iniciarSesion() {

    this.error = '';

    if (!this.email || !this.password) {
      this.error = 'Ingresa tu correo y contraseña.';
      return;
    }

    this.cargando = true;

    try {

      await signInWithEmailAndPassword(
        auth,
        this.email,
        this.password
      );

      this.router.navigate(['/home']);

    } catch (error: any) {

      console.error(error);

      switch (error.code) {

        case 'auth/invalid-email':
          this.error = 'El correo electrónico no es válido.';
          break;

        case 'auth/invalid-credential':
          this.error = 'Correo o contraseña incorrectos.';
          break;

        case 'auth/user-disabled':
          this.error = 'Este usuario está deshabilitado.';
          break;

        case 'auth/too-many-requests':
          this.error = 'Demasiados intentos. Intenta nuevamente más tarde.';
          break;

        default:
          this.error = 'No se pudo iniciar sesión.';
      }

    } finally {
      this.cargando = false;
    }
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }
}