import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CircuitService } from 'src/app/services/circuit.service';

@Component({
  selector: 'app-admin-circuit',
  templateUrl: './admin-circuit.component.html',
  styleUrls: ['./admin-circuit.component.css']
})
export class AdminCircuitComponent implements OnInit {

  @Input() c:any;
  @Input() f:any;
@Output() newCircuits: EventEmitter<any> = new EventEmitter();

  constructor(private circuitService:CircuitService,
    private router:Router) { }

  ngOnInit(): void {
  }
  deleteCircuit(id:any){
    this.circuitService.deleteCircuit(id).subscribe(
      ()=>{
        console.log('circuit deleted');
        this.circuitService.getAllCircuit().subscribe(
          data=>{
            this.newCircuits.emit(data.circuits)
          }
        )
      }

    )
}
editCircuit(id:any){
  this.router.navigate([`edit-circuit/${id}`]);
}

displayCircuit(id:any){
  this.router.navigate([`display-circuit/${id}`]);
}
}
