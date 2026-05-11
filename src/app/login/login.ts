import { Component, inject } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

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
