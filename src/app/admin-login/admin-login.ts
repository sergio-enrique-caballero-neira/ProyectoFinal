import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  constructor(private router: Router) {}

  private authService = inject(AuthService);
  private cd = inject(ChangeDetectorRef);

  error: boolean = false;
  mensajeError: string = '';
  usuario: string = '';
  contrasena: string = '';

  darkMode = true;

  ngOnInit() {

  }

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
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
        this.cd.detectChanges();
      },
    });
  }
}
