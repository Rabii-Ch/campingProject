import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input() m:any;
  constructor() { }

  ngOnInit(): void {
  }
  reserver(id:any){

  }

}
