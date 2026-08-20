import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [Hero, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  habitaciones = [
  {
    id: 1,
    nombre: 'Habitación Simple',
    descripcion: 'Ideal para una persona. Cómoda, moderna y equipada para una estadía tranquila.',
    precio: 35,
    imagen: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    disponible: true
  },
  {
    id: 2,
    nombre: 'Habitación Doble',
    descripcion: 'Perfecta para parejas o dos huéspedes, con mayor espacio y comodidad.',
    precio: 55,
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    disponible: true
  },
  {
    id: 3,
    nombre: 'Habitación Familiar',
    descripcion: 'Amplia habitación diseñada para disfrutar una cómoda estadía en familia.',
    precio: 85,
    imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    disponible: false
  }
];

}