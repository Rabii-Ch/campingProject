import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CircuitService } from 'src/app/services/circuit.service';

@Component({
  selector: 'app-edit-circuit',
  templateUrl: './edit-circuit.component.html',
  styleUrls: ['./edit-circuit.component.css']
})
export class EditCircuitComponent implements OnInit {
  circuit: any = {};
  circuitForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private circuitservice: CircuitService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.circuitservice.getCircuitById(this.id).subscribe(
      data => {
        this.circuit = data.circuit;
      }
    )
    this.circuitForm = this.formBuilder.group({

      name: [''],
      programme: [''],
      date: [''],
      guide: [''],
      place: [''],
      price: ['']
    })

  }
  editCircuit(){
this.circuitservice.editCircuit(this.circuit).subscribe(
  ()=>{
    alert('circuit was updated');
this.router.navigate(['admin']);
  }
)
  }

}
