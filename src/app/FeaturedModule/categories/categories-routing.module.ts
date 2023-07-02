import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubCategorylistComponent } from './subcategories/sub-categorylist/sub-categorylist.component';
import { AddCategorylistComponent } from './subcategories/add-categorylist/add-categorylist.component';

const routes: Routes = [
{path:'add-category',component:AddCategoryComponent},
{path:'category-list',component:CategoryListComponent},
{path:'sub_category',component:SubCategorylistComponent},
{path:'add_subcategory',component:AddCategorylistComponent},
{ path: '', component: CategoryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
