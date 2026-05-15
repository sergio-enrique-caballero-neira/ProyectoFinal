import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Login} from './login/login';
import {Register} from './register/register';
import { AdminLogin } from './admin-login/admin-login';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { CargaArchivo } from './carga-archivo/carga-archivo';


const routes: Routes = [{path: 'login', component: Login},
  {path: 'register', component: Register},
  {path: 'carga-archivo', component: CargaArchivo},
  {path: 'admin-dashboard', component: AdminDashboard},
  {path: 'admin-login', component: AdminLogin},
  {path: '', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
