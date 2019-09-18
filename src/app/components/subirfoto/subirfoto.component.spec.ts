import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirfotoComponent } from './subirfoto.component';

describe('SubirfotoComponent', () => {
  let component: SubirfotoComponent;
  let fixture: ComponentFixture<SubirfotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirfotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
