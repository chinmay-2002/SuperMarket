import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmaticListComponent } from './cosmatic-list.component';

describe('CosmaticListComponent', () => {
  let component: CosmaticListComponent;
  let fixture: ComponentFixture<CosmaticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosmaticListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosmaticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
