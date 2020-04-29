import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorentItemComponent } from './torent-item.component';

describe('TorentItemComponent', () => {
  let component: TorentItemComponent;
  let fixture: ComponentFixture<TorentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
