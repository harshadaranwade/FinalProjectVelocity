import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsubcategoriesComponent } from './addsubcategories.component';

const routes: Routes = [{ path: '', component: AddsubcategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsubcategoriesRoutingModule { }
