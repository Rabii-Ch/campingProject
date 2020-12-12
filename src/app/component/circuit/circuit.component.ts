import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {
  @Input() x:any;
  constructor() { }

  ngOnInit(): void {
  }

}
