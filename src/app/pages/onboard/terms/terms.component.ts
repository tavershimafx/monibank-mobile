import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  accepted: boolean = false
  constructor(private router: Router){
   
  }
  
  cont(){
    if (this.accepted){
      this.router.navigateByUrl("/onboarding/finalizing")
    }
  }
}
