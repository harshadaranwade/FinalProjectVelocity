import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesComponent } from './subcategories.component';
import { AddCategorylistComponent } from './add-categorylist/add-categorylist.component';
import { SubCategorylistComponent } from './sub-categorylist/sub-categorylist.component';


@NgModule({
  declarations: [
    SubcategoriesComponent,
    AddCategorylistComponent,
    SubCategorylistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubcategoriesModule { }
