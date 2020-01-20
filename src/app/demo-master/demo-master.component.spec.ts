import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMasterComponent } from './demo-master.component';

describe('DemoMasterComponent', () => {
  let component: DemoMasterComponent;
  let fixture: ComponentFixture<DemoMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
