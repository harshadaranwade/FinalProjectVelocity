import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { AddCategorylistComponent } from './subcategories/add-categorylist/add-categorylist.component';
import { SubCategorylistComponent } from './subcategories/sub-categorylist/sub-categorylist.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoryComponent,
    CategoryListComponent,
    AddCategorylistComponent,
    SubCategorylistComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule
  ]
})
export class CategoriesModule { }
