import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  
  constructor(private router: Router){

  }

  next(){
    this.router.navigateByUrl("/dashboard/finalize-pay")
  }
}
