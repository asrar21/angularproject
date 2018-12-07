import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystdashComponent } from './analystdash.component';

describe('AnalystdashComponent', () => {
  let component: AnalystdashComponent;
  let fixture: ComponentFixture<AnalystdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
