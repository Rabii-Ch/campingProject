import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CircuitService } from 'src/app/services/circuit.service';

@Component({
  selector: 'app-display-circuit',
  templateUrl: './display-circuit.component.html',
  styleUrls: ['./display-circuit.component.css']
})
export class DisplayCircuitComponent implements OnInit {
  circuit:any;
  id:any;
  constructor(
    private circuitService: CircuitService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.circuitService.getCircuitById(this.id).subscribe(
      data=>{
        this.circuit=data.circuit;
      }
    )
  }

}
