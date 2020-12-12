import { Component, Input, OnInit } from '@angular/core';
import { CircuitService } from 'src/app/services/circuit.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {

  @Input() x:any;
  circuits: any;
  constructor(private circuitService: CircuitService) { } //injecter le service playerService dans le constructeur

  ngOnInit() {
    this.circuitService.getAllCircuit().subscribe(  //this.playerService.getAllPlayers():appel de fonction | subscribe:s'inscrir le fonction pour le retour des donnees de la base.
      data => {             // data sammineha na7na fiha lvaleur mta3 retour mta3 service
        this.circuits = data;
      }
    );
  }

}
