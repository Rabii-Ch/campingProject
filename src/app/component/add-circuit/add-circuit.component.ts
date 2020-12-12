import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CircuitService } from 'src/app/services/circuit.service';

@Component({
  selector: 'app-add-circuit',
  templateUrl: './add-circuit.component.html',
  styleUrls: ['./add-circuit.component.css']
})
export class AddCircuitComponent implements OnInit {

  circuit: any = {};
  circuitForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private circuitservice: CircuitService,
    private router: Router) { }

  ngOnInit() {
    this.circuitForm = this.formBuilder.group({

      name: [''],
      programme: [''],
      date: [''],
      guide: [''],
      place: [''],
      price: ['']
    })
  }

  addCircuit() {
    console.log('here my circuit', this.circuit);
    this.circuitservice.addCircuit(this.circuit).subscribe(
      () => {
        console.log('circuit added succesfuly');
        this.router.navigate(['admin']);
        alert('circuit added');
      })
  }

}
