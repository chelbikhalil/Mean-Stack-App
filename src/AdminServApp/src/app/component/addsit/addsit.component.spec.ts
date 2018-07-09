import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsitComponent } from './addsit.component';

describe('AddsitComponent', () => {
  let component: AddsitComponent;
  let fixture: ComponentFixture<AddsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
