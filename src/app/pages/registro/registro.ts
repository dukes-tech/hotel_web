import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../../services/firebase';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre = '';
  apellido = '';
  email = '';
  password = '';
  confirmarPassword = '';

  cargando = false;
  mensaje = '';
  error = '';

  constructor(private router: Router) {}

  async registrar() {

    this.mensaje = '';
    this.error = '';

    if (
      !this.nombre ||
      !this.apellido ||
      !this.email ||
      !this.password ||
      !this.confirmarPassword
    ) {
      this.error = 'Completa todos los campos.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    if (this.password.length < 6) {
      this.error = 'La contraseña debe tener mínimo 6 caracteres.';
      return;
    }

    this.cargando = true;

    try {

      const credencial = await createUserWithEmailAndPassword(
        auth,
        this.email,
        this.password
      );

      await setDoc(
        doc(db, 'usuarios', credencial.user.uid),
        {
          uid: credencial.user.uid,
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          rol: 'cliente',
          activo: true,
          fechaRegistro: new Date()
        }
      );

      this.mensaje = 'Usuario registrado correctamente.';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);

    } catch (error: any) {

      console.error(error);

      switch (error.code) {

        case 'auth/email-already-in-use':
          this.error = 'Este correo ya está registrado.';
          break;

        case 'auth/invalid-email':
          this.error = 'El correo electrónico no es válido.';
          break;

        case 'auth/weak-password':
          this.error = 'La contraseña es demasiado débil.';
          break;

        default:
          this.error = 'No se pudo registrar el usuario.';
      }

    } finally {
      this.cargando = false;
    }
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}