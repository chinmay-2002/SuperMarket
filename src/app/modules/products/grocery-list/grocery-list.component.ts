import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../../../core/products-manager.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent implements OnInit {
  ngOnInit(): void {
    this.getAllGroceries();
  }
  constructor(private service: ProductsManagerService) {}
  grocery: Object;
  getAllGroceries() {
    this.service.getAllGrocery().subscribe((data) => {
      console.log('Availaible Data ', data);
      this.grocery = data;
    });
  }
}
