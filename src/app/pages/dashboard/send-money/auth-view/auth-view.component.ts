import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent {
  
  constructor(private router: Router){

  }

  next(){
    this.router.navigateByUrl("/dashboard/summary")
  }
}
