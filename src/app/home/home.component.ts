import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  FormControl, Validators } from '@angular/forms';
import {ProductService } from '../product.service'
import { Routes, RouterModule,Router} from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input()  productData
Form: FormGroup;
  constructor(private fb: FormBuilder, public prodserve: ProductService,private router:  Router) { 
    // this.createForm();
    this.Form = new FormGroup({
      productName: new FormControl('', [ Validators.required,Validators.minLength(3)]),
      productPrice: new FormControl('',  [ Validators.required, Validators.minLength(3)]),
      productCategory:new FormControl('',  [ Validators.required, Validators.minLength(3)]),
      productImage: new FormControl('',[Validators.required]),
      productColor: new FormControl(''),
      productDescription: new FormControl('')
    });

  }


  createProduct() {
    let productName = this.Form.controls['productName'].value;
    let productPrice = this.Form.controls['productPrice'].value
    let productCategory = this.Form.controls['productCategory'].value
    let productImage = this.Form.controls['productImage'].value
    let productColor = this.Form.controls['productColor'].value
    let productDescription = this.Form.controls['productDescription'].value
    this.productData = {
      productName: productName,
      productPrice:productPrice,
      productCategory: productCategory,
      productImage: productImage,
      productColor: productColor,
      productDescription: productDescription
    }
    console.log(this.productData)
      
      this.prodserve.createProduct(this.productData).subscribe((data)=>{
        if (data['success']) {
          let productId = data['data']._id
          this.router.navigate(['/product',productId]);
        }
        else{
          console.log("res data" , data);
        }
      })
    
  }

  ngOnInit() {
  }

}
