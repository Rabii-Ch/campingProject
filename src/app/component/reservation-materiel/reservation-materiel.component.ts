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

  materiel: any = {};
  reservation: any;
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

      pName: [''],
      ref: [''],
      qtyR: [''],
      price: [''],
      description: ['']
      
    })

  }
  reserver(){
    this.reservationService.addReservation(this.reservation).subscribe(
      ()=>{
        alert('reservation was updated');
    this.router.navigate(['materiel']);
      }
    )
      }

}
