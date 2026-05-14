import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cliente = inject(HttpClient);

  private readonly urlbase: string = 'http://localhost:8080';

  login(nombre: string, contrasena: string) {
    const url = `${this.urlbase}/auth/login?nombre=${encodeURIComponent(nombre)}&contrasena=${encodeURIComponent(contrasena)}`;
    return this.cliente.post<AuthResponse>(url, null, {}).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', nombre);
      }),
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

  getUsername() {
    return localStorage.getItem('username');
  }
}
