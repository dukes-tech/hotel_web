import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../shared/hero/hero';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-contactos',
  imports: [Hero, FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {

  hotel: any = null;

  contacto = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  constructor(
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef
  ) {
    this.cargarHotel();
  }

  async cargarHotel() {
    this.hotel = await this.hotelService.obtenerHotel();
    this.cdr.detectChanges();
  }

  async enviarFormulario() {

  try {

    await this.hotelService.crearMensaje(this.contacto);

    alert('Mensaje enviado correctamente');

    this.contacto = {
      nombre: '',
      correo: '',
      mensaje: ''
    };

  } catch (error) {

    console.error('Error al enviar mensaje:', error);

    alert('No se pudo enviar el mensaje');

  }

}
}