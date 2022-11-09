import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'add-product', component:AddNewProductComponent},
  {path:'edit-product/:productId', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
