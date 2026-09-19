import { Component, ChangeDetectorRef } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-home',
  imports: [Hero, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   habitaciones: any[] = [];
  hotel: any = null;

  constructor(
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef
    
  ) {
    this.cargarHabitaciones();
    this.cargarHotel();
    this.hotelService.actualizarImagenesHotel();
  }

async cargarHabitaciones() {
  this.habitaciones =
    await this.hotelService.obtenerHabitaciones();

  this.cdr.detectChanges();
}

async cargarHotel() {
  this.hotel =
    await this.hotelService.obtenerHotel();

  this.cdr.detectChanges();
}

}