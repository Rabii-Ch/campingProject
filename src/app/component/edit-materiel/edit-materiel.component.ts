import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-edit-materiel',
  templateUrl: './edit-materiel.component.html',
  styleUrls: ['./edit-materiel.component.css']
})
export class EditMaterielComponent implements OnInit {

  materiel: any = {};
  materielForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private materielservice: MaterielService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.materielservice.getMaterielById(this.id).subscribe(
      data => {
        this.materiel = data.materiel;
      }
    )
    this.materielForm = this.formBuilder.group({

      pName: [''],
      ref: [''],
      qty: [''],
      price: [''],
      description: ['']
      
    })

  }
  editMateriel(){
this.materielservice.editMateriel(this.materiel).subscribe(
  ()=>{
    alert('materiel was updated');
this.router.navigate(['admin']);
  }
)
  }

}
