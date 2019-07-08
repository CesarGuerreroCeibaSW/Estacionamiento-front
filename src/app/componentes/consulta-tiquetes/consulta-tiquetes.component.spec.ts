import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTiquetesComponent } from './consulta-tiquetes.component';

describe('ConsultaTiquetesComponent', () => {
  let component: ConsultaTiquetesComponent;
  let fixture: ComponentFixture<ConsultaTiquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTiquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTiquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
