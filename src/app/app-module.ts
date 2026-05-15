import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { AdminLogin } from './admin-login/admin-login';
import { Register } from './register/register';
import { CargaArchivo } from './carga-archivo/carga-archivo';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor';
import { Analisis } from './analisis/analisis';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminMenuUsuario } from './admin-dashboard/admin-menu-usuario/admin-menu-usuario';
import { AdminMenuAdministrador } from './admin-dashboard/admin-menu-administrador/admin-menu-administrador';

@NgModule({
  declarations: [
    App,
    Login,
    AdminLogin,
    Register,
    CargaArchivo,
    Analisis,
    AdminDashboard,
    AdminMenuUsuario,
    AdminMenuAdministrador,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
