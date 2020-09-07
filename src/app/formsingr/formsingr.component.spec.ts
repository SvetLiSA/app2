import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsingrComponent } from './formsingr.component';

describe('FormsingrComponent', () => {
  let component: FormsingrComponent;
  let fixture: ComponentFixture<FormsingrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsingrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsingrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
