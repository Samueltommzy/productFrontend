import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url =  'https://product-ch-backend.herokuapp.com';  
  constructor(private http: HttpClient) {
   }

   getProducts(){
    return this.http.get(`${this.url}/Products`)
   }

   createProduct(product){
     let productObject = {
       Name :       product.productName,
       Price :      product.productPrice,
       Category:    product.productCategory,
       Image:       product.productImage,
       Color:       product.productColor,
       Description: product.productDescription
     }
     console.log("service",productObject)
    return this.http.post(`${this.url}/product`, productObject)
   }

   loadProduct(product) {
    let productId = product._id
    return this.http.get(`${this.url}/product/${productId}`)
   }
}
