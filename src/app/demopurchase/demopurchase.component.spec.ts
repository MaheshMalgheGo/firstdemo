import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopurchaseComponent } from './demopurchase.component';

describe('DemopurchaseComponent', () => {
  let component: DemopurchaseComponent;
  let fixture: ComponentFixture<DemopurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
