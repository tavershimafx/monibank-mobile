import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL } from 'src/app/models/constants';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  user: any
  productId = ""
  product:any
  products:any = []
  isLoading = false

  constructor(private router: Router, private httpClient: HttpClient,
    snapshot: ActivatedRoute
  ){
    snapshot.queryParamMap.subscribe({
      next: (e)=>{
        this.productId = e.get("id")!
        this.getProduct()
      }
    })
  this.user = JSON.parse(localStorage.getItem("usrr-ds")!)
  }

  ngOnInit(): void {
    this.getProducts()
  }

  checkout(){
    this.httpClient.get(`${BASE_URL}/checkout?uid=${this.user.id}`).subscribe({
      next: (e) =>{
        localStorage.setItem("moni-oid", e as string)
        this.router.navigateByUrl("/dashboard/checkout")
      },
      error: (e)=>{
        
      }
    })
    
  }

  addToCart(id: number){
    this.isLoading = true
    this.httpClient.get(`${BASE_URL}/add-to-cart?uid=${this.user.id}&id=${this.productId}`).subscribe({
      next: (e) =>{
        this.isLoading = false
      },
      error: (e)=>{
        this.isLoading = false

      }
    })
  }
  
  getProduct(){
     this.httpClient.get(`${BASE_URL}/product-detail?id=${this.productId}`).subscribe({
      next: (e) =>{
        this.product = e
      },
      error: (e)=>{

      }
    })
  }

  getProducts(){
    this.httpClient.get(`${BASE_URL}/get-products`).subscribe({
      next: (e) =>{
        console.log(e);
        this.products = (e as Array<any>).slice(0, 10)
      },
      error: (e)=>{

      }
    })
  }
}
