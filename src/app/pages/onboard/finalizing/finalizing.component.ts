import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/models/constants';
import { Router } from '@angular/router';
import { globalCache } from 'src/app/store/actions/left-nav.action';

@Component({
  selector: 'finalizing',
  templateUrl: './finalizing.component.html',
  styleUrls: ['./finalizing.component.css']
})
export class FinalizingComponent {
  registerData: any
  submitting: boolean = false
  created: boolean = false
  user: any
  respMsg: any
  rl: any

  constructor(private router: Router, private httpClient: HttpClient, private store: Store){
    (this.store as Store<{data: object}>).select(p =>{
      if (p.data != undefined){
        this.registerData = { ...p.data }
      }
    }).subscribe()
    this.createAcct()
  }

  createAcct(){
    this.submitting = true
    if (this.registerData){
      this.httpClient.post(`${BASE_URL}/register`, this.registerData).subscribe({
        next: (e) =>{
          this.submitting = false
          this.created = true
          this.respMsg = "Account Created Successfully"
          this.user = e
          this.rl = "/onboarding/login"
        },
        error: (e)=>{
          this.submitting = false
          this.created = false
          this.respMsg = e.error.Errors[0]
          this.rl = "/onboarding/create-account"
        }
      })
    }
  }
}
