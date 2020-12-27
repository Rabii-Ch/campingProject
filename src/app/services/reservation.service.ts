import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllReservations() {
    return this.httpClient.get<{ message: string, reservations: any }>(`${this.reservationUrl}/allReservations`);

  }

  deleteReservation(id: string) {
    return this.httpClient.delete(`${this.reservationUrl}/deleteReservation/${id}`);
  }
  addReservation(reservation: any) {
    
    return this.httpClient.post(`${this.reservationUrl}/addReservation`, reservation);
  }
  editReservation(reservation: any) {
    return this.httpClient.put(`${this.reservationUrl}/editReservation/${reservation._id}`, reservation);
  }
  getReservationById(id: string) {
    return this.httpClient.get<{ reservation: any }>(`${this.reservationUrl}/displayReservation/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  // getReservationsByUserId(id: string) {
  //   return this.httpClient.get<{ reservations: any }>(`${this.reservationUrl}/userReservation`);
  //   // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  // }
  searchCircuit(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.reservationUrl}/api/search/${term}`)
  }
}
