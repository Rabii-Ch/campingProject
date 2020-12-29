import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.css']
})
export class PannierComponent implements OnInit {
  
  reservations:any;
  materiel:any;
  reservation:any;
  qtyancienne:any;
  id: any;


  constructor( private reservationService:ReservationService,
   private materielService:MaterielService,
   private activated: ActivatedRoute,
    private router:Router ) { }

  ngOnInit(){
    
    this.getReservations();
  }

  getReservations(){
    this.id = this.activated.snapshot.paramMap.get('id');
    this.reservationService.getReservationsByUserId(this.id).subscribe(
      data => {
        this.reservations = data.reservations;
      }
    )
  }
 
  cancelReservation(id:any){
    
    this.reservationService.getReservationById(id).subscribe(
      data=>{
        this.reservation=data.reservation;
      }
    )
    this.materielService.getMaterielById(this.reservation.materielID).subscribe(
      data=>{
        this.materiel=data.materiel;
      }
    )
    
    this.qtyancienne=this.materiel.qty;
   
    
    this.materiel.qty= Number(this.qtyancienne) + Number(this.reservation.qtyR);
      this.materielService.editMateriel(this.materiel).subscribe(
        ()=>{
          alert('material was updated');
        }
      )
      this.reservationService.deleteReservation(id).subscribe(
        ()=>{
          alert('reservation was updated');
          this.getReservations();
        }
      )
  }

}
