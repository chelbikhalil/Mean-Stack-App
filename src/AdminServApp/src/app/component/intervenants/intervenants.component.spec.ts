import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenantsComponent } from './intervenants.component';

describe('IntervenantsComponent', () => {
  let component: IntervenantsComponent;
  let fixture: ComponentFixture<IntervenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
