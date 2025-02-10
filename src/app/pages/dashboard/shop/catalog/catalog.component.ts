import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/app/models/constants';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  user: any
  products:any = []
  account: any

  constructor(private router: Router, private httpClient: HttpClient){
    
  this.user = JSON.parse(localStorage.getItem("usrr-ds")!)
  }

  ngOnInit(): void {
    this.getAccount()
    this.getProducts()
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

  getProducts(){
    this.httpClient.get(`${BASE_URL}/get-products`).subscribe({
      next: (e) =>{
        console.log(e);
        this.products = (e as Array<any>).slice(0, 20)
      },
      error: (e)=>{

      }
    })
  }
}
