import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsubcategoriesRoutingModule } from './addsubcategories-routing.module';
import { AddsubcategoriesComponent } from './addsubcategories.component';


@NgModule({
  declarations: [
    AddsubcategoriesComponent
  ],
  imports: [
    CommonModule,
    AddsubcategoriesRoutingModule
  ]
})
export class AddsubcategoriesModule { }
