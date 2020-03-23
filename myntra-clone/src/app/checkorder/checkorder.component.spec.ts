import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckorderComponent } from './checkorder.component';

describe('CheckorderComponent', () => {
  let component: CheckorderComponent;
  let fixture: ComponentFixture<CheckorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
