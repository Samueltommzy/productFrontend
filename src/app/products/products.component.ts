import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllProducts : any
  constructor( private product: ProductService) { }

  ngOnInit() {
    this.loadAllProducts();
  }
 
 loadAllProducts(){
  return this.product.getProducts().subscribe((data)=>{
    if(data['success'])
    this.AllProducts = data['data'];
    console.log("all products", this.AllProducts);
  });
 }
}
