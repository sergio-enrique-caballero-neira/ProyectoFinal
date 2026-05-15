import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Darktheme} from '../services/darktheme';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  private darkTheme = inject(Darktheme);

  darkMode = true;
  menu: string = '';

  ngOnInit() {
    this.darkMode = this.darkTheme.darkMode;
  }

  toggleTheme() {
    this.darkTheme.toggleTheme();
    this.darkMode = this.darkTheme.darkMode;
  }

  seleccionarMenu(menu: string): void {
    this.menu = menu;

  }
}
