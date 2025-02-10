import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_URL } from 'src/app/models/constants';
import { globalCache } from 'src/app/store/actions/left-nav.action';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false
  loginErrors: any

  loginForm: FormGroup = new FormGroup({
    "username": new FormControl('', Validators.compose([Validators.required])),
    "password": new FormControl('', Validators.compose([Validators.required]))
  })

  constructor(private router: Router, private httpClient: HttpClient, private store: Store){

  }

  login(){
    this.loginErrors = undefined
    if (this.loginForm.valid){
      this.isLoading = true
      this.httpClient.post(`${BASE_URL}/login`, this.loginForm.value, { withCredentials: true}).subscribe({
        next: (e) =>{
          (this.store as Store<{data: object}>).dispatch(globalCache({ data: e}))
          localStorage.setItem("usrr-ds", JSON.stringify(e))
          this.router.navigateByUrl("/dashboard");
        },
        error: (e)=>{
          this.isLoading = false
          this.loginErrors = e.error.Error[0]
  
        }
      })
    }
  }
}
