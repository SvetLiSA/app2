import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdokladComponent } from './editdoklad.component';

describe('EditdokladComponent', () => {
  let component: EditdokladComponent;
  let fixture: ComponentFixture<EditdokladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdokladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdokladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
