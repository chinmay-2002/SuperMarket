import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { FutureDiscountComponent } from './future-discount/future-discount.component';
import { FutureDiscountsComponent } from './future-discounts/future-discounts.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PurchaseHistoryComponent,
    FutureDiscountComponent,
    FutureDiscountsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
