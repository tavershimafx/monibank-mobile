import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_URL } from 'src/app/models/constants';
import { globalCache } from 'src/app/store/actions/left-nav.action';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  recipient: any
  errMsg: any
  validRecipient = false
  isLoading = false
  sendForm: FormGroup = new FormGroup({
    "username": new FormControl('', Validators.compose([Validators.required])),
    "password": new FormControl('', Validators.compose([Validators.required]))
  })

  constructor(private router: Router, private httpClient: HttpClient, private store: Store){

  }

  next(){
    if (this.sendForm.valid && this.validRecipient){
      (this.store as Store<{data: object}>).dispatch(globalCache({ data: this.sendForm.value}))
      this.router.navigateByUrl("/dashboard/summary");

      // this.httpClient.post(`${BASE_URL}/login`, this.sendForm.value, { withCredentials: true}).subscribe({
      //   next: (e) =>{
      //     localStorage.setItem("usrr-ds", JSON.stringify(e))
      //   },
      //   error: (e)=>{
          
  
      //   }
      // })
    }
  }

  findAccount(){
    if (this.sendForm.controls["accountNumber"].value.length == 10){
      this.httpClient.get(`${BASE_URL}/find-account?number=${this.sendForm.controls["accountNumber"].value}`).subscribe({
        next: (e) =>{
          this.recipient = e
          this.validRecipient = true
          this.isLoading = false
        },
        error: (e)=>{
          this.errMsg = e
          this.isLoading = false
        }
      })
    }
  }
}
