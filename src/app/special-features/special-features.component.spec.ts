import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFeaturesComponent } from './special-features.component';

describe('SpecialFeaturesComponent', () => {
  let component: SpecialFeaturesComponent;
  let fixture: ComponentFixture<SpecialFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
