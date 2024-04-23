import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../../core/user-manager.service';

@Component({
  selector: 'app-future-discounts',
  templateUrl: './future-discounts.component.html',
  styleUrl: './future-discounts.component.css',
})
export class FutureDiscountsComponent implements OnInit {
  ngOnInit(): void {
    this.getalldiscounts();
  }
  discounts: Object;
  constructor(private service: UserManagerService) {}
  getalldiscounts() {
    this.service.getfuturediscounts().subscribe((data) => {
      console.log('Availaible Data ', data);
      this.discounts = data;
    });
  }
}
