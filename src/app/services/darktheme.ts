import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Darktheme {
  public darkMode = true;

  constructor() { }

  toggleTheme() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }
}
