import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A3Component } from './a3.component';

describe('A3Component', () => {
  let component: A3Component;
  let fixture: ComponentFixture<A3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
