import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-habitaciones',
  imports: [RouterLink, FormsModule],
  templateUrl: './habitaciones.html',
  styleUrl: './habitaciones.css',
})
export class Habitaciones {

  idHabitacion: string = '';
  habitacion: any = null;
  modoEdicion: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.idHabitacion =
      this.route.snapshot.paramMap.get('id') ?? '';

    this.cargarHabitacion();
  }

  async cargarHabitacion() {
      this.habitacion =
        await this.hotelService.obtenerHabitacion(this.idHabitacion);

      this.cdr.detectChanges();
    }
    
  editar() {
    this.modoEdicion = true;
  }

  
  async guardarCambios() {

    await this.hotelService.actualizarHabitacion(
      this.idHabitacion,
      {
        precio_por_noche: this.habitacion.precio_por_noche,
        disponible: this.habitacion.disponible
      }
    );

    this.modoEdicion = false;

    alert('Habitación actualizada correctamente');

    this.cdr.detectChanges();
  }
  async eliminarHabitacion() {

  const confirmar = confirm(
    '¿Estás seguro de eliminar esta habitación?'
  );

  if (!confirmar) {
    return;
  }

  try {

    await this.hotelService.eliminarHabitacion(
      this.idHabitacion
    );

    alert('Habitación eliminada correctamente');

    this.router.navigate(['/home']);

  } catch (error) {

    console.error('Error eliminando habitación:', error);

    alert('No se pudo eliminar la habitación');
  }
}
}