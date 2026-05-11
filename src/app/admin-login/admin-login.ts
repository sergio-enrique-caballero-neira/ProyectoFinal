import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {

  darkMode = true;

  toggleTheme() {

    this.darkMode = !this.darkMode;

    if(this.darkMode){
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }

  }
}
