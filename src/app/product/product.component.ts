import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute} from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  itemId: any
  public Product: Data[] = [];
  constructor(private pserv: ProductService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.itemId = this.route.snapshot.params['id']
    this.loadProduct();

  }
  
  loadProduct() {
    return this.pserv.loadProduct(this.itemId).subscribe((data)=>{
      console.log("returned" ,data)
      if (data['success']) {
        this.Product = data["data"];
        console.log("in loadProduct",this.Product)

      }
    })
  }
  addToCart(){

  }
  removeFromCart(){

  }
}
