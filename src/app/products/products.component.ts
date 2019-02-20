import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Routes, RouterModule,Router} from '@angular/router';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllProducts : any
  constructor( private product: ProductService,private router: Router) { }

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

 loadProduct(id){
   this.product.loadProduct(id).subscribe((data)=>{
        if (data['success']) {
          let productId = data['data']._id
          this.router.navigate(['/product',productId]);
        }
        else{
          console.log("res data" , data);
        }
      })
    
  }
 }
