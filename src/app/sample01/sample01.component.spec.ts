import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample01Component } from './sample01.component';

describe('Sample01Component', () => {
  let component: Sample01Component;
  let fixture: ComponentFixture<Sample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
