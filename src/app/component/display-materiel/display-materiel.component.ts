import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-display-materiel',
  templateUrl: './display-materiel.component.html',
  styleUrls: ['./display-materiel.component.css']
})
export class DisplayMaterielComponent implements OnInit {

  materiel:any;
  id:any;
  constructor(
    private materielService: MaterielService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.materielService.getMaterielById(this.id).subscribe(
      data=>{
        this.materiel=data.materiel;
      }
    )
  }

}
