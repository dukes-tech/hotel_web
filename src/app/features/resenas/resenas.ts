import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-resenas',
  imports: [Hero],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css',
})
export class Resenas {

  resenas = [
    {
      id: 1,
      nombre: 'Carlos Martínez',
      comentario: 'Excelente atención, habitaciones muy cómodas y limpias. Definitivamente volvería.',
      calificacion: 5
    },
    {
      id: 2,
      nombre: 'María López',
      comentario: 'Una experiencia muy agradable. El personal fue amable y la habitación estuvo perfecta.',
      calificacion: 5
    },
    {
      id: 3,
      nombre: 'Andrés Torres',
      comentario: 'Muy buena ubicación y excelente relación entre precio y calidad.',
      calificacion: 4
    }
  ];

}