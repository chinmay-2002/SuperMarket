import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDiscountComponent } from './future-discount.component';

describe('FutureDiscountComponent', () => {
  let component: FutureDiscountComponent;
  let fixture: ComponentFixture<FutureDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutureDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
