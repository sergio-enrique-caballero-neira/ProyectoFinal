import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Darktheme } from '../services/darktheme';
import { UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private darkTheme = inject(Darktheme);
  private usuarioService = inject(UsuarioService);
  private cd = inject(ChangeDetectorRef);

  nombre = '';
  email = '';
  telefono = '';
  contrasena = '';

  registrando = false;

  mensajeError = '';
  mensajeExito = '';
  darkMode = true;

  ngOnInit() {
    this.darkMode = this.darkTheme.darkMode;
  }

  toggleTheme() {
    this.darkTheme.toggleTheme();
    this.darkMode = this.darkTheme.darkMode;
  }

  register() {
    this.registrando = true;

    this.usuarioService
      .postUsuario(this.nombre, this.email, this.telefono, this.contrasena)
      .subscribe({
        next: (res) => {
          this.registrando = false;
          this.mensajeExito = res;
          this.mensajeError = '';
          this.cd.detectChanges();
        },
        error: (err) => {
          this.registrando = false;
          this.mensajeExito = '';
          this.mensajeError = err.error;
          this.cd.detectChanges();
        },
      });

    this.cd.detectChanges();
  }

  limpiar() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.contrasena = '';
  }
}
