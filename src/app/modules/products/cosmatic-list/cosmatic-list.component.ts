import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../../../core/products-manager.service';

@Component({
  selector: 'app-cosmatic-list',
  templateUrl: './cosmatic-list.component.html',
  styleUrl: './cosmatic-list.component.css',
})
export class CosmaticListComponent implements OnInit {
  ngOnInit(): void {
    this.getAllConsmatics();
  }
  constructor(private service: ProductsManagerService) {}
  consmatic: Object;
  getAllConsmatics() {
    this.service.getAllConsmatics().subscribe((data) => {
      console.log('Availaible Data ', data);
      this.consmatic = data;
    });
  }
  added() {
    alert('Added in Purchase History');
  }
}
