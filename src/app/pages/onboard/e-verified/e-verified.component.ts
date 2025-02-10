import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e-verified',
  templateUrl: './e-verified.component.html',
  styleUrls: ['./e-verified.component.css']
})
export class EVerifiedComponent {
 
  constructor(private router: Router){

  }
  
  cont(){
    this.router.navigateByUrl("/onboarding/up-photo")
  }
}
