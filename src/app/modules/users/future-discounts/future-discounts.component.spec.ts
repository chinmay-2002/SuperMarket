import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDiscountsComponent } from './future-discounts.component';

describe('FutureDiscountsComponent', () => {
  let component: FutureDiscountsComponent;
  let fixture: ComponentFixture<FutureDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureDiscountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutureDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
