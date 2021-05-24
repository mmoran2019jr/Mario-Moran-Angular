import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaActualizarComponent } from './poliza-actualizar.component';

describe('PolizaActualizarComponent', () => {
  let component: PolizaActualizarComponent;
  let fixture: ComponentFixture<PolizaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
