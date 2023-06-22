import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./FeaturedModule/login/login.module').then(m => m.LoginModule) }, 
{ path: 'dashBoard', loadChildren: () => import('./FeaturedModule/dash-board/dash-board.module').then(m => m.DashBoardModule) },
 { path: 'categories', loadChildren: () => import('./FeaturedModule/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'product', loadChildren: () => import('./FeaturedModule/product/product.module').then(m => m.ProductModule) }, 
  { path: 'orders', loadChildren: () => import('./FeaturedModule/orders/orders.module').then(m => m.OrdersModule) },
   { path: 'users', loadChildren: () => import('./FeaturedModule/users/users.module').then(m => m.UsersModule) },
    { path: 'newsletter', loadChildren: () => import('./FeaturedModule/newsletter/newsletter.module').then(m => m.NewsletterModule) },
     { path: 'setting', loadChildren: () => import('./FeaturedModule/setting/setting.module').then(m => m.SettingModule) },
{ path: 'subcategories', loadChildren: () => import('./FeaturedModule/subcategories/subcategories.module').then(m => m.SubcategoriesModule) },
{ path: 'addcategories', loadChildren: () => import('./FeaturedModule/addcategories/addcategories.module').then(m => m.AddcategoriesModule) },
{ path: 'addsubcategories', loadChildren: () => import('./FeaturedModule/addsubcategories/addsubcategories.module').then(m => m.AddsubcategoriesModule) },
{ path: 'addproduct', loadChildren: () => import('./FeaturedModule/addproduct/addproduct.module').then(m => m.AddproductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
