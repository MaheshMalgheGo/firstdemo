import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosaleComponent } from './demosale.component';

describe('DemosaleComponent', () => {
  let component: DemosaleComponent;
  let fixture: ComponentFixture<DemosaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
