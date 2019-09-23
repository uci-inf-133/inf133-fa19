import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A4Component } from './a4.component';

describe('A4Component', () => {
  let component: A4Component;
  let fixture: ComponentFixture<A4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
