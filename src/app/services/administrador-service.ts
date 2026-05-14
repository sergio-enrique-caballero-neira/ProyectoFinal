import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdministradorModel } from '../models/administrador.model';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  private cliente = inject(HttpClient);

  private readonly urlbase: string = 'http://localhost:8080';

  getAdministradores() {
    return this.cliente.get<AdministradorModel[]>(`${this.urlbase}/administrador/mostrartodo`, {
      observe: 'response',
    });
  }

  postAdministrador(nombre: string, email: string, telefono: string, contrasena: string, cargo: string,) {
    const url = `${this.urlbase}/administrador/crear?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&telefono=${encodeURIComponent(telefono)}&contrasena=${encodeURIComponent(contrasena)}&cargo=${encodeURIComponent(cargo)}`;
    return this.cliente.post(url, null, { responseType: 'text' });
  }

  putAdministrador(id: number, nombre: string, email: string,telefono: string,contrasena: string, cargo: string,) {
    const url = `${this.urlbase}/administrador/actualizar?id=${id}&nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&telefono=${encodeURIComponent(telefono)}&contrasena=${encodeURIComponent(contrasena)}&cargo=${encodeURIComponent(cargo)}`;
    return this.cliente.put(url, null, { responseType: 'text' });
  }

  deleteAdministrador(id: number) {
    return this.cliente.delete(`${this.urlbase}/administrador/eliminar?id=${id}`, {
      responseType: 'text',
    });
  }
}
