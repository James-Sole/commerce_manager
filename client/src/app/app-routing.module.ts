import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {path: 'product', component: AllProductsComponent},
  {path: 'product/new', component: NewProductComponent},
  {path: 'product/:id', component: ShowProductComponent},
  {path: 'product/:id/edit', component: EditProductComponent},
  { path: '', pathMatch: 'full', redirectTo: '/product' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
