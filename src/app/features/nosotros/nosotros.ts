import { Component, ChangeDetectorRef } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-nosotros',
  imports: [Hero],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  hotel: any = null;

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

}