import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-contactos',
  imports: [Hero, FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {

  contacto = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log(this.contacto);

    alert('Mensaje enviado correctamente');

    this.contacto = {
      nombre: '',
      correo: '',
      mensaje: ''
    };
  }
}