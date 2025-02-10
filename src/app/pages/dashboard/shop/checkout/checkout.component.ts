import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_URL } from 'src/app/models/constants';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  user: any
  oid = ""
  checkout:any

  constructor(private router: Router, private httpClient: HttpClient){
    
  this.user = JSON.parse(localStorage.getItem("usrr-ds")!)
  this.oid = localStorage.getItem("moni-oid")!
  }

  ngOnInit(): void {
    this.getCheckout()
  }

  getAccount(){

  }

  getCheckout(){
    this.httpClient.get(`${BASE_URL}/checkout-details?uid=${this.user.id}&id=${this.oid}`).subscribe({
      next: (e) =>{
        console.log(e);
        this.checkout = e
      },
      error: (e)=>{

      }
    })
  }
}
