import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArchivo } from './carga-archivo';

describe('CargaArchivo', () => {
  let component: CargaArchivo;
  let fixture: ComponentFixture<CargaArchivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargaArchivo],
    }).compileComponents();

    fixture = TestBed.createComponent(CargaArchivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
