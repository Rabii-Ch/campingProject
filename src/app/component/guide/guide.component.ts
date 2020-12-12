import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  @Input() g:any;
  constructor() { }

  ngOnInit(): void {
  }

}
