import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRegulationComponent } from './rules-regulation.component';

describe('RulesRegulationComponent', () => {
  let component: RulesRegulationComponent;
  let fixture: ComponentFixture<RulesRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
