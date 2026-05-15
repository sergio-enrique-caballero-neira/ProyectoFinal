import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-admin-menu-usuario',
  standalone: false,
  templateUrl: './admin-menu-usuario.html',
  styleUrl: './admin-menu-usuario.css',
})
export class AdminMenuUsuario {
  @Input() darkMode: boolean = true;

  menu: string = '';

  seleccionarMenu(menu: string): void {
    this.menu = menu;
  }
}
