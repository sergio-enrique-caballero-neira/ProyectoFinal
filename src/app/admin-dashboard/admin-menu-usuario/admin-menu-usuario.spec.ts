import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuUsuario } from './admin-menu-usuario';

describe('AdminMenuUsuario', () => {
  let component: AdminMenuUsuario;
  let fixture: ComponentFixture<AdminMenuUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMenuUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMenuUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
