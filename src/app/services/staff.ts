import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl = 'https://futuramaapi.com/api/characters';

  constructor(private http: HttpClient) {}

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}