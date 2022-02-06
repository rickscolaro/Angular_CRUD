import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component"; /* Componente roteado */
import { ProductCrudComponent } from "./views/product-crud/product-crud.component"; /* Componente roteado */
import { ProductCreateComponent } from "./components/product/product-create/product-create.component"; /* Componente roteado */
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";


const routes: Routes = [
  {
    path: "" /* Rota raiz da aplicação */,
    component: HomeComponent,
  },
  {
    path: "products" ,
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
  {
    
    path: "products/update/:id", 
    component: ProductUpdateComponent,
  },
  {
    path:"products/delete/:id",
    component: ProductDeleteComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
