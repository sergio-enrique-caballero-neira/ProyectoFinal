import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private cliente = inject(HttpClient);

  private readonly urlbase: string = 'http://localhost:8080';

  getUsuarios() {
    return this.cliente.get<UsuarioModel[]>(this.urlbase + '/usuario/mostrartodo', {
      observe: 'response',
    });
  }

  getIdByUsername(username: string) {
    return this.cliente.get<number>(this.urlbase + '/usuario/getIdByUsername?nombre=' + username, {observe: 'response',});
  }

  postUsuario(nombre: string, email: string, telefono: string, contrasena: string) {
    const url =
      this.urlbase +
      '/usuario/crear?' +
      'nombre=' +
      encodeURIComponent(nombre) +
      '&' +
      'email=' +
      encodeURIComponent(email) +
      '&' +
      'telefono=' +
      encodeURIComponent(telefono) +
      '&' +
      'contrasena=' +
      encodeURIComponent(contrasena);
    return this.cliente.post(url, null, { responseType: 'text' });
  }

  putUsuario(id: number, nombre: string, email: string, telefono: string, contrasena: string) {
    const url =
      this.urlbase +
      '/usuario/actualizar?' +
      'id=' +
      id +
      '&' +
      'nombre=' +
      encodeURIComponent(nombre) +
      '&' +
      'email=' +
      encodeURIComponent(email) +
      '&' +
      'telefono=' +
      encodeURIComponent(telefono) +
      '&' +
      'contrasena=' +
      encodeURIComponent(contrasena);
    return this.cliente.put(url, null, { responseType: 'text' });
  }

  deleteUsuario(id: number) {
    return this.cliente.delete(this.urlbase + '/usuario/eliminar?id=' + id, {
      responseType: 'text',
    });
  }
}
