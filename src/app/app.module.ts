import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponentComponent } from './menu-bar-component/menu-bar-component.component';
import { CreateProductComponentComponent } from './create-product-component/create-product-component.component';
import { UpdateProductComponentComponent } from './update-product-component/update-product-component.component';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';
import {FormsModule} from "@angular/forms";
import { SearcheComponentComponent } from './searche-component/searche-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponentComponent,
    CreateProductComponentComponent,
    UpdateProductComponentComponent,
    AcceuilComponentComponent,
    SearcheComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
