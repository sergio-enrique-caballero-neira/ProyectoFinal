import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

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
