import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample02Component } from './sample02.component';

describe('Sample02Component', () => {
  let component: Sample02Component;
  let fixture: ComponentFixture<Sample02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
