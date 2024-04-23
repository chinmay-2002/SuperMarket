import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryListComponent } from './stationary-list.component';

describe('StationaryListComponent', () => {
  let component: StationaryListComponent;
  let fixture: ComponentFixture<StationaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationaryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
