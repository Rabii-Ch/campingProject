import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CircuitService } from 'src/app/services/circuit.service';
import { GuideService } from 'src/app/services/guide.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

circuits:any;
guides:any;
users:any;
  constructor(
    private circuitService:CircuitService,
    private guideService:GuideService,
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() { 
    this.getCircuits();
    this.getGuides();
    this.getUsers();
  }
  getCircuits(){
    this.circuitService.getAllCircuit().subscribe(
      data => {
        console.log('here my circuit', data.circuits);
        
        this.circuits = data.circuits;
      }
    )
  }
  updateCircuits(gettedCircuits:any){
    this.circuits=gettedCircuits;  
  
  }
  getGuides(){
    this.guideService.getAllGuides().subscribe(
      data => {
        console.log('here my guide', data.guides);
        
        this.guides = data.guides;
      }
    )
  }
  updateGuides(gettedGuides:any){
    this.guides=gettedGuides;  
  
  }
  getUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        console.log('here my user', data.users);
        
        this.users = data.users;
      }
    )
  }
  updateUsers(gettedUsers:any){
    this.users=gettedUsers;  
  
  }

}
