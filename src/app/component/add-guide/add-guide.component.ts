import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-add-guide',
  templateUrl: './add-guide.component.html',
  styleUrls: ['./add-guide.component.css']
})
export class AddGuideComponent implements OnInit {

  guide: any = {};
  guideForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private guideservice: GuideService,
    private router: Router) { }

  ngOnInit() {
    this.guideForm = this.formBuilder.group({

      fName: [''],
      lName: [''],
      tel: [''],
      description: ['']
    
      
    })
  }

  addGuide() {
    console.log('here my circuit', this.guide);
    this.guideservice.addGuide(this.guide).subscribe(
      () => {
        console.log('circuit added succesfuly');
        this.router.navigate(['admin']);
        alert('guide added');
      })
  }

}
