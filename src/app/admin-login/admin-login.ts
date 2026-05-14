import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Darktheme } from '../services/darktheme';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  constructor(private router: Router) {}

  private darkTheme = inject(Darktheme);
  private authService = inject(AuthService);
  private cd = inject(ChangeDetectorRef);

  error = false;
  mensajeError = '';
  usuario = '';
  contrasena = '';

  darkMode = true;

  ngOnInit() {
    this.darkMode = this.darkTheme.darkMode;
  }

  toggleTheme() {
    this.darkTheme.toggleTheme();
    this.darkMode = this.darkTheme.darkMode;
  }

  login() {
    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: (res) => {
        if (res.role === 'ADMIN' && res.token) {
          this.router.navigate(['/admin-dashboard']);
          this.error = false;
          this.mensajeError = '';
          this.cd.detectChanges();
        } else {
          this.error = true;
          this.mensajeError = 'Administrador No encontrado';
          this.cd.detectChanges();
        }
      },
      error: (err) => {
        this.error = true;
        this.mensajeError = 'Usuario o Contraseña incorrectos';
        console.log(err)
        this.cd.detectChanges();
      },
    });
  }
}
