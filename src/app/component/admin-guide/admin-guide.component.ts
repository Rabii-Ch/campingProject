import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-admin-guide',
  templateUrl: './admin-guide.component.html',
  styleUrls: ['./admin-guide.component.css']
})
export class AdminGuideComponent implements OnInit {

  @Input() g:any;
  @Output() newGuides: EventEmitter<any> = new EventEmitter();
  
    constructor(private guideService:GuideService,
      private router:Router) { }
  
    ngOnInit(): void {
    }
    deleteGuide(id:any){
      this.guideService.deleteGuide(id).subscribe(
        ()=>{
          console.log('guide deleted');
          this.guideService.getAllGuides().subscribe(
            data=>{
              this.newGuides.emit(data.guides)
            }
          )
        }
  
      )
  }
  editGuide(id:any){
    this.router.navigate([`edit-guide/${id}`]);
  }
  
  displayGuide(id:any){
    this.router.navigate([`display-guide/${id}`]);
  }

}
