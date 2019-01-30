import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbxFormsComponent } from './cbx-forms.component';

describe('CbxFormsComponent', () => {
  let component: CbxFormsComponent;
  let fixture: ComponentFixture<CbxFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbxFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
