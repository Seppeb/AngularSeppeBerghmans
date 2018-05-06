import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone30Component } from './zone30.component';

describe('Zone30Component', () => {
  let component: Zone30Component;
  let fixture: ComponentFixture<Zone30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zone30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zone30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
