import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input() m:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  reserver(id:any){
      this.router.navigate([`reservation/${id}`]);
    
  }

}
