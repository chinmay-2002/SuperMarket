import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../../../core/products-manager.service';

@Component({
  selector: 'app-stationary-list',
  templateUrl: './stationary-list.component.html',
  styleUrl: './stationary-list.component.css',
})
export class StationaryListComponent implements OnInit {
  ngOnInit(): void {
    this.getAllStationary();
  }
  stationary: Object;
  constructor(private service: ProductsManagerService) {}
  getAllStationary() {
    this.service.getAllStationary().subscribe((data) => {
      console.log('Availaible Data ', data);
      this.stationary = data;
    });
  }
}
