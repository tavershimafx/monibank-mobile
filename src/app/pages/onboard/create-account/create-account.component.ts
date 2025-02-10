import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { globalCache } from 'src/app/store/actions/left-nav.action';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  
  loginForm: FormGroup = new FormGroup({
    "firstName": new FormControl('', Validators.compose([Validators.required])),
    "lastName": new FormControl('', Validators.compose([Validators.required])),
    "email": new FormControl('', Validators.compose([Validators.required])),
    "password": new FormControl('', Validators.compose([Validators.required]))
  })
  constructor(private router: Router, private httpClient: HttpClient, private store: Store){
    (this. store as Store<{data: object}>).select(k =>{
      if (k.data){
        this.loginForm.setValue(k.data)
      }
    }).subscribe()
  }
  
  cont(){
    if (this.loginForm.valid){
      (this. store as Store<{data: object}>).dispatch(globalCache({data: this.loginForm.value}))
      this.router.navigateByUrl("/onboarding/terms")
    }
  }
}
