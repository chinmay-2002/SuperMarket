import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { StationaryListComponent } from './stationary-list/stationary-list.component';
import { CosmaticListComponent } from './cosmatic-list/cosmatic-list.component';


@NgModule({
  declarations: [
    GroceryListComponent,
    StationaryListComponent,
    CosmaticListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
