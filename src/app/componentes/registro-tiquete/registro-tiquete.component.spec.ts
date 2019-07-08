import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTiqueteComponent } from './registro-tiquete.component';

describe('RegistroTiqueteComponent', () => {
  let component: RegistroTiqueteComponent;
  let fixture: ComponentFixture<RegistroTiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
