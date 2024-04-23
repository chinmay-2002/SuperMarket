import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { FutureDiscountComponent } from './future-discount/future-discount.component';


@NgModule({
  declarations: [
    PurchaseHistoryComponent,
    FutureDiscountComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
