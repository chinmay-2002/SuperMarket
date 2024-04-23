import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureDiscountComponent } from './future-discount/future-discount.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'future-discount', pathMatch: 'full' },
  { path: 'future-discount', component: FutureDiscountComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
