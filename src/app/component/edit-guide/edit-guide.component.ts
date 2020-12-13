import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-edit-guide',
  templateUrl: './edit-guide.component.html',
  styleUrls: ['./edit-guide.component.css']
})
export class EditGuideComponent implements OnInit {

  guide: any = {};
  guideForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private guideservice: GuideService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.guideservice.getGuideById(this.id).subscribe(
      data => {
        this.guide = data.guide;
      }
    )
    this.guideForm = this.formBuilder.group({

      fName: [''],
      lName: [''],
      tel: [''],
      description: ['']
      
    })

  }
  editGuide(){
this.guideservice.editGuide(this.guide).subscribe(
  ()=>{
    alert('guide was updated');
this.router.navigate(['admin']);
  }
)
  }

}
