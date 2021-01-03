import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  reservations :any;
  id: any;
  total: any;

  constructor( private reservationService:ReservationService,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    this.getReservations();
  }
  getReservations(){
   //this.id = this.activated.snapshot.paramMap.get('id');
   this.id = localStorage.getItem('userID');
   this.total=0;
    this.reservationService.getReservationsByUserId(this.id).subscribe(
      data => {
        this.reservations = data.reservations;
        for (let i = 0; i < this.reservations.length; i++) {
          this.total += (Number(this.reservations[i].price) * Number(this.reservations[i].qtyR));
    
        }
      }
    )
    
    
  }
  
}
