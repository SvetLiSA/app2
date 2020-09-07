import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsmotrComponent } from './prosmotr.component';

describe('ProsmotrComponent', () => {
  let component: ProsmotrComponent;
  let fixture: ComponentFixture<ProsmotrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsmotrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsmotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
