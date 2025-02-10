import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_URL } from 'src/app/models/constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user: any
  transactions:any = []
  account: any

  constructor(private router: Router, private httpClient: HttpClient, private store: Store){
    // (this.store as Store<{data: object}>).select(p =>{
    //   if (p.data != undefined){
    //     this.user = { ...p.data }
    //     console.log("user data", p.data)
    //   }
    // }).subscribe()
  this.user = JSON.parse(localStorage.getItem("usrr-ds")!)
  }

  ngOnInit(): void {
    this.getAccount();
    this.getTransactions()
  }

  getAccount(){
    this.httpClient.get(`${BASE_URL}/find-account?number=${this.user.accountNumber}`).subscribe({
      next: (e) =>{
        this.account = e
      },
      error: (e)=>{

      }
    })
  }

  getTransactions(){
    let start = new Date(Date.now() - (60 * 60 * 24 * 60 * 1000)) // last 60 days
    let end = new Date()

    let s = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`
    let e = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
    this.httpClient.get(`${BASE_URL}/get-transactions?i=${this.user.id}&start=${s}&end=${e}`).subscribe({
      next: (e) =>{
        console.log(e);
        this.transactions = (e as Array<any>).slice(0, 10)
      },
      error: (e)=>{

      }
    })
  }
}
