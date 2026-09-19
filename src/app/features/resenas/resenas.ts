import { Component, ChangeDetectorRef } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-resenas',
  imports: [Hero],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css',
})
export class Resenas {

  resenas: any[] = [];
  promedio: number = 0;
  total: number = 0;

  constructor(
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef
  ) {
    this.cargarResenas();
  }

  async cargarResenas() {

    const hotel: any = await this.hotelService.obtenerHotel();

    if (hotel?.valoraciones) {
      this.resenas = hotel.valoraciones.comentarios;
      this.promedio = hotel.valoraciones.promedio;
      this.total = hotel.valoraciones.total;
    }

    this.cdr.detectChanges();
  }
}