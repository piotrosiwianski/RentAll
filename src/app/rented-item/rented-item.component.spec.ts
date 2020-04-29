import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedItemComponent } from './rented-item.component';

describe('RentedItemComponent', () => {
  let component: RentedItemComponent;
  let fixture: ComponentFixture<RentedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
