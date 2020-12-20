import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-admin-materiel',
  templateUrl: './admin-materiel.component.html',
  styleUrls: ['./admin-materiel.component.css']
})
export class AdminMaterielComponent implements OnInit {

  @Input() m:any;
  @Input() p:any;
  @Output() newMateriels: EventEmitter<any> = new EventEmitter();
  
    constructor(private materielService:MaterielService,
      private router:Router) { }
  
    ngOnInit(): void {
    }
    deleteMateriel(id:any){
      this.materielService.deleteMateriel(id).subscribe(
        ()=>{
          console.log('materiel deleted');
          this.materielService.getAllMateriels().subscribe(
            data=>{
              this.newMateriels.emit(data.materiels)
            }
          )
        }
  
      )
  }
  editMateriel(id:any){
    this.router.navigate([`edit-materiel/${id}`]);
  }
  
  displayMateriel(id:any){
    this.router.navigate([`display-materiel/${id}`]);
  }

}
