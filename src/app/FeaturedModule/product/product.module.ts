import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    ProductComponent,
    AddproductComponent,
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbRating,
   MatButtonModule
    

  ]
})
export class ProductModule { }
