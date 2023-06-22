import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategoriesRoutingModule } from './addcategories-routing.module';
import { AddcategoriesComponent } from './addcategories.component';


@NgModule({
  declarations: [
    AddcategoriesComponent
  ],
  imports: [
    CommonModule,
    AddcategoriesRoutingModule
  ]
})
export class AddcategoriesModule { }
