import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclientsComponent } from './updateclients.component';

describe('UpdateclientsComponent', () => {
  let component: UpdateclientsComponent;
  let fixture: ComponentFixture<UpdateclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
