import { Component, inject } from '@angular/core';
import { Darktheme } from '../services/darktheme';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private darkTheme = inject(Darktheme);
  darkMode = true;

  ngOnInit() {
    this.darkMode = this.darkTheme.darkMode;
  }

  toggleTheme() {
    this.darkTheme.toggleTheme();
    this.darkMode = this.darkTheme.darkMode;
  }
}
