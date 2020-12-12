import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {

  materiel: any = {};
  materielForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private materielservice: MaterielService,
    private router: Router) { }

  ngOnInit() {
    this.materielForm = this.formBuilder.group({

      pName: [''],
      ref: [''],
      qty: [''],
      price: [''],
      description: ['']
    
    })
  }

  addMateriel() {
    console.log('here my materiel', this.materiel);
    this.materielservice.addMateriel(this.materiel).subscribe(
      () => {
        console.log('materiel added succesfuly');
        this.router.navigate(['admin']);
        alert('materiel added');
      })
  }

}
