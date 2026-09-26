import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffService } from '../../services/staff';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff.html',
  styleUrl: './staff.css'
})
export class Staff implements OnInit {

  personajes: any[] = [];
  cargando = true;
  error = '';

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {

    this.staffService.obtenerPersonajes().subscribe({

      next: (respuesta: any) => {

        console.log('FUTURAMA API:', respuesta);

        // La API puede devolver directamente el array
        // o devolverlo dentro de results/items.
        if (Array.isArray(respuesta)) {
          this.personajes = respuesta;
        } else if (respuesta.items) {
          this.personajes = respuesta.items;
        } else if (respuesta.results) {
          this.personajes = respuesta.results;
        } else {
          this.personajes = [];
        }

        this.cargando = false;
      },

      error: (error: any) => {
        console.error('ERROR FUTURAMA:', error);
        this.error = 'No se pudieron cargar los personajes.';
        this.cargando = false;
      }

    });

  }
}