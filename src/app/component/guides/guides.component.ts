import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  guides: any;
  constructor(private guideService: GuideService) { } //injecter le service playerService dans le constructeur

  ngOnInit() {
    this.guideService.getAllGuides().subscribe(  //this.playerService.getAllPlayers():appel de fonction | subscribe:s'inscrir le fonction pour le retour des donnees de la base.
      data => {             // data sammineha na7na fiha lvaleur mta3 retour mta3 service
        this.guides = data.guides;
      }
    );
  }
}
