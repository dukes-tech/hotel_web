import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private staffService: StaffService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.staffService.obtenerPersonajes().subscribe({
      next: (respuesta: any) => {

        this.personajes = respuesta.items || [];
        this.cargando = false;

        this.cdr.detectChanges();
      },

      error: (error: any) => {
        console.error('ERROR FUTURAMA:', error);

        this.error = 'No se pudieron cargar los personajes.';
        this.cargando = false;

        this.cdr.detectChanges();
      }
    });
  }
}