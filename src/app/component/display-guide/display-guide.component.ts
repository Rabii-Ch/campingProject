import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-display-guide',
  templateUrl: './display-guide.component.html',
  styleUrls: ['./display-guide.component.css']
})
export class DisplayGuideComponent implements OnInit {

  guide:any;
  id:any;
  constructor(
    private guideService: GuideService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.guideService.getGuideById(this.id).subscribe(
      data=>{
        this.guide=data.guide;
      }
    )
  }

}
