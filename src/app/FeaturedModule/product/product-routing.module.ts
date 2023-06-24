import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [{ path: '', component: ProductComponent },
{ path: 'addProduct', component:AddproductComponent },
// { path: 'updateProduct:/id', component:AddproductComponent },
{ path: 'productList', component: ProductlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
