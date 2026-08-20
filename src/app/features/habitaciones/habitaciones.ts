import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-habitaciones',
  imports: [RouterLink],
  templateUrl: './habitaciones.html',
  styleUrl: './habitaciones.css',
})
export class Habitaciones {

  idHabitacion: number = 0;

  habitaciones = [
    {
      id: 1,
      nombre: 'Habitación Simple',
      descripcion: 'Ideal para una persona. Cómoda, moderna y equipada para una estadía tranquila.',
      precio: 35,
      capacidad: '1 persona',
      imagen: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32'
    },
    {
      id: 2,
      nombre: 'Habitación Doble',
      descripcion: 'Perfecta para parejas o dos huéspedes, con mayor espacio y comodidad.',
      precio: 55,
      capacidad: '2 personas',
      imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427'
    },
    {
      id: 3,
      nombre: 'Habitación Familiar',
      descripcion: 'Amplia habitación diseñada para disfrutar una cómoda estadía en familia.',
      precio: 85,
      capacidad: '4 personas',
      imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a'
    }
  ];

  habitacion: any;

  constructor(private route: ActivatedRoute) {

    this.idHabitacion = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.habitacion = this.habitaciones.find(
      h => h.id === this.idHabitacion
    );
  }
}