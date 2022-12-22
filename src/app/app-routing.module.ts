import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { ListProductsComponent } from './Pages/list-products/list-products.component';

const routes: Routes = [
  {path:'', component:ListProductsComponent},
  {path:'addProduct',component:AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
