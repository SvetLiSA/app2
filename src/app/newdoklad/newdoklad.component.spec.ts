import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdokladComponent } from './newdoklad.component';

describe('NewdokladComponent', () => {
  let component: NewdokladComponent;
  let fixture: ComponentFixture<NewdokladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdokladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdokladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
