import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-menu-administrador',
  standalone: false,
  templateUrl: './admin-menu-administrador.html',
  styleUrl: './admin-menu-administrador.css',
})
export class AdminMenuAdministrador {
  @Input() darkMode: boolean = true;

  @Output() cambiarMenu = new EventEmitter<string>();

  seleccionarMenu(menu: string): void {
    this.cambiarMenu.emit(menu);
  }

}
