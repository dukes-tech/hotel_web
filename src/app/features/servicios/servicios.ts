import { Component, ChangeDetectorRef } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  servicios: any[] = [];

  constructor(
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef
  ) {
    this.cargarServicios();
  }

  async cargarServicios() {

    this.servicios =
      await this.hotelService.obtenerServicios();

    this.cdr.detectChanges();
  }

}