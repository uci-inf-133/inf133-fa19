import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A0Component } from './a0.component';

describe('A0Component', () => {
  let component: A0Component;
  let fixture: ComponentFixture<A0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
