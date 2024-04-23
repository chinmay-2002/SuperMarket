import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../../core/user-manager.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css',
})
export class PurchaseHistoryComponent implements OnInit {
  history: Object;
  ngOnInit(): void {
    this.getpurchasehistory();
  }
  constructor(private service: UserManagerService) {}

  getpurchasehistory() {
    this.service.getpurchasehistory().subscribe((data) => {
      console.log('Availaible Data ', data);
      this.history = data;
    });
  }
}
