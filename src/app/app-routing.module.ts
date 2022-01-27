import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';
import { CreateProductComponentComponent } from './create-product-component/create-product-component.component';
import {UpdateProductComponentComponent} from "./update-product-component/update-product-component.component";
import {SearcheComponentComponent} from "./searche-component/searche-component.component";

const routes: Routes = [
  {path:"",component:AcceuilComponentComponent},
  {path:"add-product",component:CreateProductComponentComponent},
  {path:"update-product/:id",component:UpdateProductComponentComponent},
  {path:"searche-product",component:SearcheComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
