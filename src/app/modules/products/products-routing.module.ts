import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { CosmaticListComponent } from './cosmatic-list/cosmatic-list.component';
import { StationaryListComponent } from './stationary-list/stationary-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'grocery-list', pathMatch: 'full' },
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'cosmatic-list', component: CosmaticListComponent },
  { path: 'stationary-list', component: StationaryListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
