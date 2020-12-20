import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-materiel',
  templateUrl: './reservation-materiel.component.html',
  styleUrls: ['./reservation-materiel.component.css']
})
export class ReservationMaterielComponent implements OnInit {
  qtyancienne: number;
  materiel: any = {};
  reservation: any= {};
  reservationForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private materielService: MaterielService,
    private reservationService: ReservationService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.materielService.getMaterielById(this.id).subscribe(
      data => {
        this.materiel = data.materiel;
      }
    )
    
    this.reservationForm = this.formBuilder.group({

      qtyR: ['']
    
    }
    )
    
  }
  reserver(){
    console.log('this.reservationForm.value',this.reservation.qtyR);
    
    this.reservation={
      pName : this.materiel.pName,
      price: this.materiel.price,
      qtyR: this.reservation.qtyR,
      userID: localStorage.getItem("userID"),
      productID: this.materiel._id
    }
    
    
    this.qtyancienne=this.materiel.qty;
   
    if (Number(this.qtyancienne) >= Number(this.reservation.qtyR) )
    {
      this.materiel.qty= this.qtyancienne - this.reservation.qtyR;
      this.materielService.editMateriel(this.materiel).subscribe(
        ()=>{
          alert('material was updated');
        }
      )
    }
    else
    {
      alert('material was not updated, quantity must not exceed: '+this.qtyancienne );
    }
    

    this.reservationService.addReservation(this.reservation).subscribe(
      ()=>{
        alert('reservation was updated');
    this.router.navigate(['materiels']);
      }
    )
  }

}
