import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { AdminLogin } from './admin-login/admin-login';
import { Register } from './register/register';
import { CargaArchivo } from './carga-archivo/carga-archivo';

@NgModule({
  declarations: [App, Login, AdminLogin, Register, CargaArchivo],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
