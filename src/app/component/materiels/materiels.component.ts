import { Component, OnInit } from '@angular/core';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent implements OnInit {

  materiels: any;
  constructor(private materielService: MaterielService) { } //injecter le service playerService dans le constructeur

  ngOnInit() {
    this.materielService.getAllMateriels().subscribe(  //this.playerService.getAllPlayers():appel de fonction | subscribe:s'inscrir le fonction pour le retour des donnees de la base.
      data => {             // data sammineha na7na fiha lvaleur mta3 retour mta3 service
        this.materiels = data.materiels;
      }
    );
  }

}
