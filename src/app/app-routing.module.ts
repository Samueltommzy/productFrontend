import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterState} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import {AppComponent } from './app.component'


const routes: Routes = [
  {
    path: 'createProduct',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'allProducts',
    component: ProductsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
